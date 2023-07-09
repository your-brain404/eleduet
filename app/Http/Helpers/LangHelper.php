<?php

namespace App\Http\Helpers;

use App\Models\Languages;

class LangHelper
{
    public static function getRouteSegment(int $segment): string
    {
        $prefixes = array_map(function ($lang) {
            return $lang['prefix'];
        }, Languages::all()->toArray());

        $firstSegment = strtolower(request()->segment(1));
        if (in_array($firstSegment, $prefixes))
            $segment++;

        return request()->segment($segment) ?? '';
    }
}