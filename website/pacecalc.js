
// making the page calculator work 
//calculate button
document.getElementById("presetcalcbutton").addEventListener("click", calcPreset);
document.getElementById("customcalcbutton").addEventListener("click", calcCustomPace);


function atest() {
    alert("test");
}


function calcPreset() {
    var error = false;
    var output = "";

    var initialrace = document.getElementById("racedistance").value;
    var initialmin = document.getElementById("initialmin").value;
    var initialsec = document.getElementById("initialsec").value;

    
    if (!initialrace || !initialmin || !initialsec) {
        error = true;
    }
    else {
        var seconds = parseFloat(initialmin) * 60 + parseFloat(initialsec);
        var pace = seconds / initialrace; //in seconds per meter
        var miletime = 1600 * pace;

        var mile300 = miletime / 1600 * 300;
        var mile400 = miletime / 1600 * 400;
        var mile600 = miletime / 1600 * 600;

        output += "mile paces: 300 in " + mile300 + " | 400 in " + mile400 + " | 600 in " + mile600 + ".\n";
    }


    if (error) {
        alert("Error: please fill in all appropriate boxes.")
    }
    else {
        document.getElementById("presetcalculation").innerHTML = output;
    }
}

function calcCustomPace() {
    var error = false;
    var output = "Error";

    var initialrace = document.getElementById("originaldistance").value;
    var initialunits = document.getElementById("customunitsi").value;

    // make sure the units are in meters for easy math
    if (initialunits == "miles") {
        initialrace *= 1609.34;
    }
    else if (initialunits == "meters") {
        //proceed as normal
    }
    else {
        //sends an error message for bad inputs 
        error = true;
    }

    var sec = document.getElementById("customsecondsi").value;
    var min = document.getElementById("customminutesi").value;
    var hr = document.getElementById("customhoursi").value;

    var sectotal = parseFloat(hr) * 3600 + parseFloat(min) * 60 + parseFloat(sec);
    var pace = sectotal / initialrace;//pace in seconds/meter

    //determine which kind of value to calculate 
    var newrace = document.getElementById("newdistance").value;
    var newsec = document.getElementById("customsecondsf").value;
    var newmin = document.getElementById("customminutesf").value;
    var newhr = document.getElementById("customhoursf").value;


    if (!newrace && !(newsec || newmin || newhr)) {
        error = true;
    }
    else if (!newrace) {
        //this will set calcdistance as a default if no boxes are left unfilled
        output = calcDistance(pace);
    }
    else {
        output = calcTime(pace);
    }


    if (error) {
        alert("Error: please fill in all appropriate boxes.")
    }
    else {
        document.getElementById("calculatedpace").innerHTML = output;
    }


}

function calcDistance(pace) {
    var newsec = document.getElementById("customsecondsf").value;
    var newmin = document.getElementById("customminutesf").value;
    var newhr = document.getElementById("customhoursf").value;

    var sectotal = parseFloat(newhr) * 3600 + parseFloat(newmin) * 60 + parseFloat(newsec);
    var newrace = sectotal / pace;

    alert(sectotal);
    alert(newrace);


    var output = "The calculated distance is " + Math.round(newrace * 100) / 100 + " meters" + "\n" +
        "or " + Math.round(newrace / 1609.34 * 100) / 100 + " miles.";

    return output;

}
function calcTime(pace) {
    var newrace = document.getElementById("newdistance").value;
    var newtime = pace * newrace;

    var newhr = Math.floor(parseFloat(newtime) / 3600);
    var newmin = Math.floor(parseFloat(newtime - newhr * 3600) / 60);
    var newsec = Math.round(parseFloat(newtime - newhr * 3600 - newmin * 60) * 100) / 100;

    if (newsec <= 9) {
        newsec = "" + 0 + newsec;
    }

    if (newhr == 0) {
        var output = "the calculated time is " + newmin + ":" + newsec;
    }
    else {
        if (newmin <= 9) {
            newmin = "" + 0 + newmin;
        }
        var output = "the calculated time is " + newhr + ":" + newmin + ":" + newsec;
    }
    return output;
}