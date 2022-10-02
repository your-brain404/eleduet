<?php

use Illuminate\Support\Facades\Route;
use App\Mail\ReservationAccept;
use App\Mail\ShippingConfirmation;
use App\Media;
use App\Reservations;
use App\ShopOrders;
use Illuminate\Support\Facades\Hash;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

Auth::routes();
Route::get('/test', function () {
    echo Hash::make("123eleduet123");
});
Route::get('/photo-sizes', function () {
    $photos = Media::where('type', 'image/jpeg')->orWhere('type', 'image/jpg')->orWhere('type', 'image/png')->orWhere('type', 'image/bmp')->orWhere('type', 'application/octet-stream')->orWhere('type', 'image/jfif')->get();
    for ($i = 0; $i < count($photos); $i++) {
        $path = $_SERVER['ROOT'] . "/storage/media/{$photos[$i]->path}";
        if (!file_exists($path)) continue;
        list($width, $height) = getimagesize($path);
        Media::where('id', $photos[$i]->id)->first()->fill(['width' => $width, 'height' => $height])->save();
    }
});
Route::get('/auth/confirm_account/{id}', 'UsersController@confirm');
Route::get('/{catch?}', 'HomeController@index')->name('home')->where('catch', '^(?!api).*$');
