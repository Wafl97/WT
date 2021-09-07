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