<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Attributes extends Model
{
	protected $guarded = ['id'];
	protected $table = "attributes";
}
