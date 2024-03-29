<?php

namespace App\Http\Helpers;

use App\Http\Helpers\WebpHelper;
use App\SnackbarAlerts;
use App\Media;
use Illuminate\Http\File;
use Illuminate\Support\Facades\Storage;
use App\Http\Resources\MediaResource;

class FileHelper
{

	private static $name;
	private static $webpTypes = array('image/jpg', 'image/jpeg', 'image/png', 'image/jfif');

	private static function getFileName($file)
	{

		$fileNameWithExt = $file->getClientOriginalName();
		self::$name = pathinfo($fileNameWithExt, PATHINFO_FILENAME);
		$extension = $file->getClientOriginalExtension();
		$name = str_replace(' ', '_', self::$name)  . '_' . time() . '.' . $extension;

		return $name;
	}

	private static function storeToMedia($file, $path, $file_options = [])
	{

		$media = new Media;
		$media->path = str_replace('\\', '/', $path);
		$media->name = self::$name;
		$media->size = $file_options['size'] ?? $file->getSize();
		$media->type = $file->getClientMimeType();
		$media->width = $file_options['width'];
		$media->height = $file_options['height'];

		$media->save();

		return $media;
	}

	public static function store($file, $folder = 'media')
	{

		$name = self::getFileName($file);
		$date_folder = date('Y-m-d');
		$destination = $date_folder . '/';
		$full_path = $destination . $name;
		$destination = "$folder/" . $destination;
		$file_options = [
			'size' => $file->getSize(),
			'width' =>  null,
			'height' =>  null,
		];

		$storageDestinationPath = $_SERVER['ROOT'] . "/storage/$folder/$full_path";
		if (!\File::exists($_SERVER['ROOT'] . "/storage/$folder/$date_folder")) {
			\File::makeDirectory($_SERVER['ROOT'] . "/storage/$folder/$date_folder", 0755, true);
		}
		if (in_array($file->getClientMimeType(), self::$webpTypes)) {
			$img = \Image::make($file->getRealPath());
			if ($img->width() > 1920 && $img->width() > $img->height()) $img->resize(1920, 1080, function ($constraint) {
				$constraint->aspectRatio();
				// $constraint->upsize();
			});
			if ($img->height() > 1080 && $img->width() < $img->height()) $img->resize(1080, 1920, function ($constraint) {
				$constraint->aspectRatio();
				// $constraint->upsize();
			});
			$quality = $img->filesize() > 1000000 ? 50 : 90;

			$img->save($storageDestinationPath, $quality, $file->getClientOriginalExtension());
			$file_options['size'] = $img->filesize();
			WebpHelper::convertToWebp($destination, $name);

			$img->resize(576, null, function ($constraint) {
				$constraint->aspectRatio();
			});
			$mobilePath = $_SERVER['ROOT'] . "/storage/$folder/$date_folder/width_576_$name";
			$img->save($mobilePath);
			WebpHelper::convertToWebp($destination, "width_576_$name");
		} else Storage::putFileAs($destination, new File($file), $name);

		$primalPath = file_exists($storageDestinationPath) ? $storageDestinationPath : "$storageDestinationPath.webp";
		$sizes = getimagesize($primalPath);

		if ($sizes) {
			$file_options['width'] = $sizes[0];
			$file_options['height'] = $sizes[1];
			$file_options['size'] = filesize($primalPath);
		}
		$media = $folder == 'media' ? self::storeToMedia($file, $full_path, $file_options) : $full_path;

		return $media;
	}

	public static function deleteFilesFromStorage($path, $folder)
	{
		$separator = strpos($path, '/') !== FALSE ? '/' : '\\';
		list($date, $fileName) =  explode($separator, $path);

		$primalPath = "$folder/$date/$fileName";
		if (file_exists("{$_SERVER['ROOT']}/storage/$primalPath")) {
			Storage::delete($primalPath);
		}

		$primalPathWebp = "$primalPath.webp";
		if (file_exists("{$_SERVER['ROOT']}/storage/$primalPathWebp")) {
			Storage::delete($primalPathWebp);
		}

		$mobilePath = "$folder/$date/width_576_$fileName";
		if (file_exists("{$_SERVER['ROOT']}/storage/$mobilePath")) {
			Storage::delete($mobilePath);
		}

		$mobilePathWebp = "$folder/$date/width_576_{$fileName}.webp";
		if (file_exists("{$_SERVER['ROOT']}/storage/$mobilePathWebp")) {
			Storage::delete($mobilePathWebp);
		}
	}

	public static function delete($id, $folder = 'media')
	{

		$media = Media::find($id);

		if ($media->delete()) {
			FileHelper::deleteFilesFromStorage($media->path, $folder);
			return new MediaResource($media);
		} else {
			return new MediaResource(['message' => SnackbarAlerts::find(1)->error]);
		}
	}
}
