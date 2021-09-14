# L1

## E1 - create from
- created index.html
```html
<h1>New Album</h1>
<form id="form" action="index.html" method="GET">
    <label for="name">Name</label><br>
    <input type="text" id="name" name="name" placeholder="Album Name"><br>
    <label for="release">Release Year</label><br>
    <input type="number" id="release" name="release"><br>
    <label for="artist">Artist</label><br>
    <select name="artist" id="artist">
        <option value="caster">Caster</option>
        <option value="reaper">Reaper</option>
        <option value="deadlife">DEADLIFE</option>
    </select><br>
    <label for="type">Type</label><br>
    <select name="type" id="type">
        <option value="single">Single</option>
        <option value="ep">EP</option>
        <option value="album">Album</option>
    </select><br>
    <label for="desciption">Description</label><br>
    <textarea name="desciption" id="desciption" rows="10" cols="30" placeholder="Enter description..."></textarea><br>
    <label for="aTrack">Add Track</label><br>
    <input type="text" id="track" placeholder="New Track">
    <input type="button" value="Add" onClick="add2List(); return false"><br>
    <label for="tracks">Tracks</label>
    <ul name="track_list" id="track_list"></ul><br>
    <input type="submit" value="Submit">           
</form>
```

- added action.js to handle the addition of tracks
```js
function add2List(){
    //Get the value from the from
    var entryVal = document.getElementById("track").value;

    //Create the list node and add the new entry
    var li = document.createElement("li");
    var entryTxt = document.createTextNode(entryVal);
    li.appendChild(entryTxt);

    //Add the new node to the list
    document.getElementById("track_list").appendChild(li);

    //Create hidden input element
    var hidden = document.createElement("input");
    hidden.setAttribute("type","hidden");
    hidden.setAttribute("name","track");
    hidden.setAttribute("value",entryVal);
    document.getElementById("form").appendChild(hidden);
}
```
- did not need to do it this way
- how it should have been:
```html
<h1>New Album</h1>
<form id="form" action="index.html" method="GET">
    <label for="name">Name</label><br>
    <input type="text" id="name" name="name" placeholder="Album Name"><br>
    <label for="release">Release Year</label><br>
    <input type="number" id="release" name="release"><br>
    <label for="artist">Artist</label><br>
    <select name="artist" id="artist">
        <option value="caster">Caster</option>
        <option value="reaper">Reaper</option>
        <option value="deadlife">DEADLIFE</option>
    </select><br>
    <label for="type">Type</label><br>
    <select name="type" id="type">
        <option value="single">Single</option>
        <option value="ep">EP</option>
        <option value="album">Album</option>
    </select><br>
    <label for="desciption">Description</label><br>
    <textarea name="desciption" id="desciption" rows="10" cols="30" placeholder="Enter description..."></textarea><br>
    <label for="aTrack">Add Track</label><br>
    <input type="text" id="track" value="track">
    <input type="text" id="track" value="track">
    <input type="text" id="track" value="track">
    <input type="text" id="track" value="track">
    <input type="text" id="track" value="track">
    <input type="text" id="track" value="track">
    <input type="text" id="track" value="track">
    <input type="text" id="track" value="track">
    <input type="text" id="track" value="track">
    <input type="text" id="track" value="track">
    <input type="submit" value="Submit">           
</form>
```
- this also means that there was no need for the js 

## E2 - style form
- added e1.css
```css
*{
    margin: .25em;
    border-radius: 5px;
    color: #61AFEF;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1em;
}

::placeholder{
    color: #939fa8;
}

body{
    position: relative;
    width: auto;
    background-color: #42464e;
}

label{
    color: #61AFEF;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1em;
}

h1{
    color: #61AFEF;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 2.5em;
}

input{
     background-color: #54617c;
     color:#61AFEF;
}
input[type=button]:hover{
    background-color: #42464e;
}
input[type=submit]:hover{
    background-color: #42464e;
}
input[type=button]:active{
    background-color: #61AFEF;
    color:#42464e;
}
input[type=submit]:active{
    background-color: #61AFEF;
    color:#42464e;
}

textarea{
    background-color: #54617c;
}

select{
    background-color: #54617c;
}

select > option{
    color:#61AFEF;
}
```
