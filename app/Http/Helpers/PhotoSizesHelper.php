<?php

namespace App\Http\Helpers;

use App\Media;

class PhotoSizesHelper
{
    public static function getPhotoSizes(string $path): array
    {
        $media = Media::where('path', $path)->first()->toArray();
        return ['width' => $media['width'], 'height' => $media['height']];
    }
}
