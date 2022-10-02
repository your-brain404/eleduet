<?php

namespace App;

use App\Http\Helpers\PhotoSizesHelper;
use Illuminate\Database\Eloquent\Model;

class Subpages extends Model
{
    protected $table = 'subpages';

    protected $guarded = ['id'];

    protected $appends = ['photo_sizes'];

    public function getPhotoSizesAttribute()
    {
        return PhotoSizesHelper::getPhotoSizes($this->photo);
    }
}
