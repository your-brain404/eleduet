<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\CrudResource;
use App\Http\Helpers\GalleryHelper;
use App\Http\Services\CrudService;

class GalleryController extends CrudController
{
	function __construct()
	{
		parent::__construct();
	}

	public function getPhotos($table, $id)
	{
		$gallery = GalleryHelper::getPhotos($table, $id);
		return new CrudResource($gallery);
	}

	public function getOne($id)
	{
		$gallery = CrudService::getOne($id);
		return new CrudResource($gallery);
	}

	public function store(Request $request)
	{
		$gallery = CrudService::saveData($request);
		return new CrudResource($gallery);
	}


	public function destroy($id)
	{
		$gallery = CrudService::destroy($id);
		return new CrudResource($gallery);
	}
}