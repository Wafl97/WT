<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AlbumController extends Controller
{
    public function show($id){
        $albums = [$id=>request('name')];
        return view('albums.index')->with('albums',$albums);
    }

    public function redirect(){
        return redirect()->to('album');
    }
    //
}
