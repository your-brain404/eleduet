<?php

namespace App\Http\Services;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use App\Models\ServicesServiceCategories;
use App\Http\Services\CrudService;

class ServicesService
{

	public static $model = 'App\Models\Services';


	public static function saveData(Request $request): Model
	{
		$data = CrudService::prependData($request);
		CrudService::createUnexistingColumns($data);
		$model = $request->isMethod('put') ? self::$model::where('id', $request->input('id'))->first()->fill($data) : self::$model::create($data);

		$model->save();
		if (is_array($request->service_categories))
			self::saveServicesServiceCategories($model, array_unique($request->service_categories));

		return $model;
	}

	private static function saveServicesServiceCategories($model, $requestServiceCategories)
	{
		$modelServiceCategories = ServicesServiceCategories::where('service_id', $model->id)->get();
		foreach ($modelServiceCategories as $row) {
			if (!in_array($row->service_category_id, $requestServiceCategories))
				$row->delete();
		}
		$modelServiceCategories = array_map(function ($row) {
			return $row['service_category_id'];
		}, $modelServiceCategories->toArray());

		foreach ($requestServiceCategories as $categoryId) {

			if (!in_array($categoryId, $modelServiceCategories))
				ServicesServiceCategories::create(['service_category_id' => $categoryId, 'service_id' => $model->id])->save();
		}
	}
}