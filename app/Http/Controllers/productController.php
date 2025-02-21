<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Product;
use GuzzleHttp\Psr7\Response;
use Illuminate\Http\Request;
use Inertia\Inertia;

use function PHPSTORM_META\map;

class productController extends Controller
{
    public function store(Request $request)
    {
        // dd($request['product']['sizeAvailable']);
        Product::create([
            "title" => $request['product']['title'],
            "description" => $request['product']['description'],
            "prev_price" => $request['product']['prev_price'],
            "current_price" => $request['product']['current_price'],
            "quantity" => $request['product']['quantity'],
            "sizeAvailable" => json_encode($request['product']['sizeAvailable']),
            "colorsAvailable" => json_encode($request['product']['colorsAvailable']),
            "category" => $request['product']['category'],
            "section" => $request['product']['section'],
            "company" => $request['product']['company'],
            "imageUrl" => $request->file("product")['imageUrl']->store("productsImages", "public"),
        ]);
    }
    public function show(){
        $products = Product::all();
        return inertia('Admin/index', ['products' => $products]);
    }
}
