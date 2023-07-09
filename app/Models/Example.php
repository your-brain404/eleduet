<?php

namespace App;

use App\Http\Helpers\PhotoSizesHelper;
use Illuminate\Database\Eloquent\Model;

class Example extends Model
{
	protected $guarded = ['id'];
	protected $table = "{table}";
	protected $appends = ['photo_sizes'];

	public function getPhotoSizesAttribute()
	{
		return PhotoSizesHelper::getPhotoSizes($this->photo);
	}
}
