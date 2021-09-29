<?php

use App\Http\Controllers\AlbumController;
use Illuminate\Support\Facades\Route;

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

Route::get('/', function() {
    return view('main');
})->name('main');
Route::get('/albums', function (){
    return view('albums');
})->name('album');
Route::get('/albums/{$id}',[AlbumController::class, 'show']);

Route::get('/artist', function (){
    return view('artist');
})->name('artist');
