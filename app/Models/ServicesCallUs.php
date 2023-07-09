<?php

namespace App;

use App\Http\Helpers\PhotoSizesHelper;
use Illuminate\Database\Eloquent\Model;

class ServicesCallUs extends Model
{
	protected $guarded = ['id'];
	protected $table = "services_call_us";

	protected $appends = ['photo_sizes'];

	public function getPhotoSizesAttribute()
	{
		return PhotoSizesHelper::getPhotoSizes($this->photo);
	}
}
