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

	private static function storeToMedia($file, $path)
	{

		$media = new Media;
		$media->path = str_replace('\\', '/', $path);
		$media->name = self::$name;
		$media->size = $file->getSize();
		$media->type = $file->getClientMimeType();

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

		$storageDestinationPath = $_SERVER['ROOT'] . "/storage/$folder/$full_path";

		if (!\File::exists($_SERVER['ROOT'] . "/storage/$date_folder")) {
			\File::makeDirectory($_SERVER['ROOT'] . "/storage/$date_folder", 0755, true);
		}
		if (in_array($file->getClientMimeType(), self::$webpTypes)) {
			$img = \Image::make($file->getRealPath());
			if ($img->width() > 1920 && $img->width() > $img->height()) $img->resize(1920, 1080, function ($constraint) {
				$constraint->aspectRatio();
				$constraint->upsize();
			});
			if ($img->height() > 1080 && $img->width() < $img->height()) $img->resize(1080, 1920, function ($constraint) {
				$constraint->aspectRatio();
				$constraint->upsize();
			});
			$img->save($storageDestinationPath);
			WebpHelper::convertToWebp($destination, $name);
		} else Storage::putFileAs($destination, new File($file), $name);

		$media = $folder == 'media' ? self::storeToMedia($file, $full_path) : $full_path;

		return $media;
	}

	public static function deleteFilesFromStorage($path, $folder)
	{
		$separator = strpos($path, '/') !== FALSE ? '/' : '\\';
		list($date, $fileName) =  explode($separator, $path);
		Storage::delete("$folder/$date/$fileName");
		Storage::delete("$folder/$date/$fileName.webp");
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
