<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers;

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

Route::get('user', [Controllers\UserController::class, 'get']);
Route::post('user/info', [Controllers\UserController::class, 'updateInfo']);
Route::post('user/password', [Controllers\UserController::class, 'updatePassword']);

Route::get('messages', [Controllers\MessagesController::class, 'index']);
Route::post('messages', [Controllers\MessagesController::class, 'store']);
Route::get('messages/thread/{id}', [Controllers\MessagesController::class, 'show']);
Route::put('messages/thread/{id}',[Controllers\MessagesController::class, 'update']);
