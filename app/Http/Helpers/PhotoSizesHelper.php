<?php

namespace App\Http\Helpers;

use App\Models\Media;

class PhotoSizesHelper
{
    public static function getPhotoSizes(?string $path): array
    {
        $photoSizes = ['width' => 0, 'height' => 0];
        if (!$path)
            return $photoSizes;
        $media = Media::where('path', $path)->first();
        if (!$media)
            return $photoSizes;
        $media = $media->toArray();

        return ['width' => $media['width'], 'height' => $media['height']];
    }
}