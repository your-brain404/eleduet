<?php

namespace App\Http\Controllers;

use App\Http\Services\CrudService;

class CrudController extends Controller
{
    public function __construct(string $crudServiceModel = null)
    {
        CrudService::$model = $crudServiceModel ?? getModelFromController(get_class($this));
    }
}