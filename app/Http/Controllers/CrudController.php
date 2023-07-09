<?php

namespace App\Http\Controllers;

use App\Http\Services\CrudService;

class CrudController extends Controller
{
    public function __construct()
    {
        CrudService::$model = getModelFromController(get_class($this));
    }
}