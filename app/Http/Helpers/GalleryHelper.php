<?php
namespace App\Http\Helpers;

use App\Models\Gallery;
use Illuminate\Database\Eloquent\Collection;

class GalleryHelper
{

	public static function getPhotos($table, $id): Collection
	{
		return Gallery::where('table_name', $table)->where('item_id', $id)->get();
	}
}