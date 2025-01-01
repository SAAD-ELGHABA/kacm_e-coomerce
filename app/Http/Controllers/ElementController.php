<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Element;
use Illuminate\Http\Request;

class ElementController extends Controller
{
    public function store(Request $request)
    {
        // dd($request->elementInfo['element']);
        if($request->elementInfo['element']=='image'){
            $image = $request->file('elementInfo');
            $dependencies = $image['dependencies'];
            $path = $dependencies->store('images', 'public');
            // dd($path);
            Element::create([
                'element' => $request->elementInfo['element'],
                'dependencies' => $request->elementInfo['element'] == 'image' ? json_encode([$path]) : json_encode($request->elementInfo['dependencies']),
            ]);
        }elseif($request->elementInfo['element']=='table'){
            // dd($request->elementInfo);
            Element::create([
                'element' => $request->elementInfo['element'],
                'dependencies' => json_encode($request->elementInfo['dependencies']),
            ]);
        }elseif($request->elementInfo['element']=='section'){
            $image = $request->file('elementInfo');
            // dd($request);
            $dependencies = [
                'firstImage' => isset($image['dependencies']['firstImage']) ? $image['dependencies']['firstImage']->store('images', 'public') : 'firstimage',
                'secondImage' => isset($image['dependencies']['secondImage']) ? $image['dependencies']['secondImage']->store('images', 'public') : 'secondimage',
                'ButtonStyle' => $request->elementInfo['dependencies']['ButtonStyle'],
                'titleStyle' => $request->elementInfo['dependencies']['titleStyle'],
                'TextStyle' => $request->elementInfo['dependencies']['TextStyle'],
            ];
            Element::create([
                'element' => $request->elementInfo['element'],
                'dependencies' => json_encode($dependencies),
            ]);
        }elseif($request->elementInfo['element']=='video'){
            // dd($request->file('elementInfo'));
            $video = $request->file('elementInfo');
            $pathVideo = $video['dependencies']['urlVideo']->store('videos','public');
            Element::create([
                'element' => $request->elementInfo['element'],
                'dependencies' => json_encode($pathVideo),
            ]);
        }
    } 
    public function showHome(Request $request)
    {
        $data = Element::all()->map(function ($item) {
            return [
                'id' => $item->id,
                'element' => $item->element,
                'dependencies' => json_decode($item->dependencies), 
            ];
        });

        return inertia('Home', ['data' => $data]);
    }
    public function showHomeAdmin(Request $request)
    {
        $data = Element::all()->map(function ($item) {
            return [
                'id' => $item->id,
                'element' => $item->element,
                'dependencies' => json_decode($item->dependencies), 
            ];
        });

        return inertia('Admin/index', ['data' => $data]);
    }
    public function showStore(){
        return inertia('Store');
    }
}
