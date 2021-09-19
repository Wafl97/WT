function add2List(){
    //Max amount of tracks
    let max = 20;

    //Min amount of tracks
    let min = 1;

    //The currnt amount of tracks
    let curr = document.getElementById("track_list").getElementsByTagName("Li").length;
    curr++;

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
    var form = document.getElementById("form");
    hidden.setAttribute("type","hidden");
    hidden.setAttribute("name","track " + curr);
    hidden.setAttribute("value",entryVal);
    hidden.setAttribute("id","track_" + curr)
    form.appendChild(hidden);

    //Control buttons
    if(curr >= max){
        document.getElementById("addBtn").disabled = true;
    }

    if(curr > min){
        document.getElementById("rmvBtn").disabled = false;
    }
}

function delFromList(){
    //Max amount of tracks
    let max = 20;
    
    //Min amount of tracks
    let min = 1;
    
    //Get the amount
    let curr = document.getElementById("track_list").getElementsByTagName("Li").length;

    //Reomve fomr the list
    var list = document.getElementById("track_list");
    var items = list.getElementsByTagName("Li");
    var last = items[items.length -1];
    list.removeChild(last);

    //Remove the element
    var element = document.getElementById("track_" + curr);
    var form = document.getElementById("form");
    form.removeChild(element);

    curr--;

    //Control buttons
    if(curr < max){
        document.getElementById("addBtn").disabled = false;
    }

    if(curr <= min){
        document.getElementById("rmvBtn").disabled = true;
    }
}