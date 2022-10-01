<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Translations extends Model
{
	protected $guarded = ['id'];
	protected $table = "translations";
}
