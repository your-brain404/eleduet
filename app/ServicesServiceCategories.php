<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ServicesServiceCategories extends Model
{
	protected $guarded = ['id'];

	protected $casts = [
		'service_category_id' => 'integer',
		'service_id' => 'integer',
	];
}
