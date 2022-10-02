<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Services extends Model
{
	protected $guarded = ['id'];

	protected $hidden = ['service_categories'];
}
