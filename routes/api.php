<?php

use App\Http\Controllers\Auth\api\LoginController;
use App\Http\Controllers\Auth\api\RegisterController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\MailsController;
use App\Http\Controllers\MediaController;
use App\Http\Controllers\UsersController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Str;
use App\Http\Helpers\DefaultCrudTables;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */

Route::middleware('auth:api')->get('/user', function (Request $request) {
	return $request->user();
});

foreach (DefaultCrudTables::get() as $table) {
	$controller = ucfirst(Str::of($table)->camel()) . 'Controller';
	$namespacedController = "App\\Http\\Controllers\\$controller";
	Route::get("/$table/get_all/", [$namespacedController, 'getAll']);
	Route::get("/$table/get_one/{id}", [$namespacedController, 'getOne']);
	Route::put("/$table/edit", [$namespacedController, 'store'])->middleware(['admin']);
	Route::post("/$table/add/", [$namespacedController, 'store'])->middleware(['admin']);
	Route::delete("/$table/delete/{id}", [$namespacedController, 'destroy'])->middleware(['admin']);
	Route::get("/$table/get_where/", [$namespacedController, 'getWhere']);
}

Route::get(
	'/media/get_photos/',
	[MediaController::class, 'getPhotos']
);
Route::get('/media/get_files/', [MediaController::class, 'getFiles']);

Route::post(
	'/auth/register',
	[RegisterController::class, 'register']
);
Route::post('/auth/login', [LoginController::class, 'login']);
Route::post(
	'/auth/auto_login',
	[LoginController::class, 'autoLogin']
);


Route::group(['middleware' => ['web']], function () {
	Route::get('/facebook/login', [LoginController::class, 'redirectToProvider']);
	Route::get(
		'/facebook/login/callback',
		[LoginController::class, 'handleProviderCallback']
	);
});

Route::get('facebook/login/get_token', [LoginController::class, 'getToken']);

Route::get('/gallery/get_photos/{table}/{id}', [GalleryController::class, 'getPhotos']);

Route::get('/users/get_commentators', [UsersController::class, 'getCommentators']);


Route::post('/mails/send/', [MailsController::class, 'send']);
Route::put('/mails/answer/', [MailsController::class, 'store'])->middleware(['admin']);

Route::put('/users/edit', [UsersController::class, 'store'])->middleware(['auth:api', 'user.edit']);
Route::post('/users/password_reminder', [UsersController::class, 'passwordReminder']);
Route::post('/users/change_password', [UsersController::class, 'changePassword']);

Route::get('/cms_routes/get_all', function () {
	return file_get_contents(__DIR__ . "/../resources/js/router/cmsRoutes.json");
});