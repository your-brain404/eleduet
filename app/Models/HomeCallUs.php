<?php

namespace App\Models;

use App\Http\Helpers\PhotoSizesHelper;
use Illuminate\Database\Eloquent\Model;

class HomeCallUs extends Model
{
	protected $guarded = ['id'];
	protected $appends = ['photo_sizes'];

	public function getPhotoSizesAttribute()
	{
		return PhotoSizesHelper::getPhotoSizes($this->photo);
	}
}