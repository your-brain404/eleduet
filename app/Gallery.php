<?php

namespace App;

use App\Http\Helpers\PhotoSizesHelper;
use Illuminate\Database\Eloquent\Model;

class Gallery extends Model
{
    protected $table = 'gallery';

    protected $fillable = ['path', 'table_name', 'item_id', 'photo_alt'];
    protected $appends = ['photo_sizes'];

    public function getPhotoSizesAttribute()
    {
        return PhotoSizesHelper::getPhotoSizes($this->path);
    }
}
