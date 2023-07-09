<?php

namespace App\Http\Controllers;

use App\Http\Services\CrudService;
use App\Http\Resources\CrudResource;
use Illuminate\Http\Request;

class ServiceCategoriesController extends CrudController
{
	function __construct()
	{
		parent::__construct();
	}

	public function getAll()
	{
		$data = CrudService::getAll();
		return new CrudResource($data);
	}

	public function getOne($id)
	{
		$data = CrudService::getOne($id);
		return new CrudResource($data);
	}

	public function getWhere(Request $request)
	{
		$data = CrudService::getWhere($request, 'asc');
		return new CrudResource($data);
	}

	public function store(Request $request)
	{
		$data = CrudService::saveData($request);
		return new CrudResource($data);
	}

	public function destroy($id)
	{
		$data = CrudService::destroy($id);
		return new CrudResource($data);
	}
}