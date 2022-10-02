<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Slider extends Model
{
	protected $table = 'slider';

	protected $guarded = ['id'];

	protected $appends = ['photo_sizes'];

	public function getPhotoSizesAttribute()
	{
		$media = Media::where('path', $this->photo)->first()->toArray();
		return ['width' => $media['width'], 'height' => $media['height']];
	}
}
