<?php

namespace App;

use App\Http\Helpers\PhotoSizesHelper;
use Illuminate\Database\Eloquent\Model;

class Slider extends Model
{
	protected $table = 'slider';

	protected $guarded = ['id'];

	protected $appends = ['photo_sizes'];

	public function getPhotoSizesAttribute()
	{
		return PhotoSizesHelper::getPhotoSizes($this->photo);
	}
}
