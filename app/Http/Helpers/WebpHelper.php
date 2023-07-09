<?php

namespace App\Http\Helpers;

use Illuminate\Support\Facades\Storage;
use App\Models\Settings;

class WebpHelper
{
	/*
		  $destroyPrimalPhoto - flaga, która ustawiona na true usuwa pierwotne zdjęcie, z którego powstało webp

		 */
	private static $destroyPrimalPhoto = true;

	public function __construct()
	{
		self::$destroyPrimalPhoto = Settings::find(1)->destroy_primal_photo ?? true;
	}

	public static function convertToWebp($destination, $path)
	{
		$primalPhoto = storage_path() . '/app/public/' . $destination . $path;
		$image = imagecreatefromstring(file_get_contents($primalPhoto));
		ob_start();
		imagejpeg($image, NULL, 100);
		$cont = ob_get_contents();
		ob_end_clean();
		imagedestroy($image);
		$content = imagecreatefromstring($cont);
		$output = storage_path() . '/app/public/' . $destination . $path . '.webp';
		imagewebp($content, $output);
		imagedestroy($content);

		if (self::$destroyPrimalPhoto) {
			Storage::delete("$destination/$path");
		}
	}
}