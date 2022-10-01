<?php

namespace App\Http\Services;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use App\ServicesServiceCategories;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Str;

class ServicesService
{

	public static $model = 'App\Services';

	public static function createUnexistingColumns(array $data): void
	{
		$table =  Str::snake(last(explode('\\', self::$model)));
		foreach ($data as $key => $value) {
			if (!Schema::hasColumn($table, $key)) {
				Schema::table($table, function (Blueprint $table) use ($key, $value) {
					$columnType = is_integer($value) ? 'integer' : 'text';
					$table->{$columnType}($key)->nullable();
				});
			}
		}
	}

	public static function prependData(Request $request): array
	{
		return $request->all();
	}

	public static function saveData(Request $request): Model
	{
		$data = self::prependData($request);
		self::createUnexistingColumns($data);
		$model = $request->isMethod('put') ? self::$model::where('id', $request->input('id'))->first()->fill($data) : self::$model::create($data);

		$model->save();
		if (is_array($request->service_categories)) self::saveServicesServiceCategories($model, array_unique($request->service_categories));

		return $model;
	}

	private static function saveServicesServiceCategories($model, $requestServiceCategories)
	{
		$modelServiceCategories = ServicesServiceCategories::where('service_id', $model->id)->get();
		foreach ($modelServiceCategories as $row) {
			if (!in_array($row->service_category_id, $requestServiceCategories)) $row->delete();
		}
		$modelServiceCategories = array_map(function ($row) {
			return $row['service_category_id'];
		}, $modelServiceCategories->toArray());

		foreach ($requestServiceCategories as $categoryId) {

			if (!in_array($categoryId, $modelServiceCategories)) ServicesServiceCategories::create(['service_category_id' => $categoryId, 'service_id' => $model->id])->save();
		}
	}
}
