<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::get('/userInfo',function(Request $request){
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/products',function(){
    return \App\Models\Product::all();
});