<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class CustomersController extends Controller
{
    public function store(Request $request){
        $customer = $request->validate([
            'email'=>'required|email',
            'firstname'=>'required',
            'lastname'=>'required',
            'password'=>'required|confirmed|min:3',
        ]);
        $created = User::create($customer);
        if($created){
            return back()->with([
                'success'=>'customer has added succesfully 👌'
            ]);
        }else{
            return back()->with([
                'error'=>'customer has not added succesfully ❌'
            ]);
        }
    }
}
