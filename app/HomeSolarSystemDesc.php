<?php

namespace App;

use App\Http\Helpers\PhotoSizesHelper;
use Illuminate\Database\Eloquent\Model;

class HomeSolarSystemDesc extends Model
{
	protected $guarded = ['id'];
	protected $table = "home_solar_system_desc";
	protected $appends = ['photo_sizes'];

	public function getPhotoSizesAttribute()
	{
		return PhotoSizesHelper::getPhotoSizes($this->photo);
	}
}
