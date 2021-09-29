<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">    <!-- specifies encoding -->
    <title>Album library</title>
    <link rel="stylesheet" href="{{ asset('main.css') }}">
</head>
<body>
<div class="center">
<form id="form" name="newAlbum">
    <h1>New Album</h1>
    <div class='grid'>
        <label> Name: </label>
        <input type="text" name="name" id="name" class="inputForm"/>
        <span></span>
    </div>
    <div class='grid'>
        <label> Year: </label>
        <input type="number" name="year" id="year" class="inputForm"/>
    </div>
    <div class='grid'>
        <label> Artist: </label>
        <select name="artist" id="artist" class="inputForm">
            <option value="reaper">REAPER</option>
            <option value="caster">Caster</option>
            <option value="deadlife">DEADLIFE</option>
        </select>
    </div>
    <div>
        <input type="radio" id="single" name="type" value="single">
        <label for="single">Single</label>
        <input type="radio" id="ep" name="type" value="ep">
        <label for="ep">EP</label>
        <input type="radio" id="album" name="type" value="album">
        <label for="album">Album</label>
    </div>
    <div class='grid'>
        <label> Description: </label>
        <textarea  name="description" id="description" class="inputForm"></textarea>
    </div>
    <div class='grid track'>
        <lable>Tracks:</lable>
        <input type="text" id="track" placeholder="New Track">
        <input type="button" id="rmvBtn" value="Del" onClick="delFromList(); return false">
        <input type="button" id="addBtn" value="Add" onClick="add2List(); return false">
        <ul name="track_list" id="track_list"></ul><br>
    </div>
    <input type="submit" value="Submit">
</form>
</div>
</body>
</html>
