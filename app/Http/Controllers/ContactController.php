<?php

namespace App\Http\Controllers;

use App\Http\Services\CrudService;
use App\Http\Resources\CrudResource;
use Illuminate\Http\Request;

class ContactController extends CrudController
{
	function __construct()
	{
		parent::__construct();
	}

	public function getAll()
	{
		$contact = CrudService::getAll();
		return new CrudResource($contact);
	}

	public function getOne($id)
	{
		$contact = CrudService::getOne($id);
		return new CrudResource($contact);
	}

	public function getWhere(Request $request)
	{
		$contact = CrudService::getWhere($request, 'asc');
		return new CrudResource($contact);
	}

	public function store(Request $request)
	{
		$contact = CrudService::saveData($request);
		return new CrudResource($contact);
	}

	public function destroy($id)
	{
		$contact = CrudService::destroy($id);
		return new CrudResource($contact);
	}
}