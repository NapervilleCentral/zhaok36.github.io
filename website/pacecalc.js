
// making the page calculator work 
//calculate button
document.getElementById("presetcalcbutton").addEventListener("click", calcPreset);
document.getElementById("customcalcbutton").addEventListener("click", calcCustomPace);


function atest() {
    alert("test");
}

function secToMinSec(totalseconds){
    var output = "";

    if (totalseconds <=90){
        output = Math.round(totalseconds*100)/100;
    }
    else{
        var minutes = Math.floor(totalseconds/60);
        var seconds = totalseconds-(minutes*60);
        
        seconds= Math.round(seconds*100)/100;
        if (seconds<10){
            seconds = "0"+seconds;
        }
        output = minutes + ":" + seconds;
    }

    return output;
}

function calcPreset() {
    var error = false;

    var initialrace = document.getElementById("racedistance").value;
    var initialmin = document.getElementById("initialmin").value;
    var initialsec = document.getElementById("initialsec").value;

    
    if (!initialrace || !initialmin || !initialsec) {
        error = true;
    }
    else {
        var seconds = parseFloat(initialmin) * 60 + parseFloat(initialsec);
        var pace = seconds / initialrace; //in seconds per meter
        var miletime;
        
        if (initialrace == 800){
            miletime = (pace*800+15) *2;       
        }
        else if (initialrace == 1600){
            miletime = pace *1600;
        }
        else if (initialrace == 3200){
            miletime = (pace*1600)-20;
        }
        else if (initialrace == 4800){
            miletime = (pace*1600)-35;
        }
        else{
            error = true;
        }
        
        var time800 = (miletime-30)/2;
        var twomiletime = (miletime + 20); 
        var threemiletime = (miletime + 35);
        var CVtime = miletime + 45;
        var tempotime = miletime + 60; 
        var upbeattime = miletime + 105; 

        var half200 = time800/4;
        var half250 = time800/800 *250;
        var half400 = time800/800 * 400;
        var halfrace = time800;

        var mile300 = miletime / 1600 * 300;
        var mile400 = miletime / 1600 * 400;
        var mile600 = miletime / 1600 * 600;
        var milerace = miletime;
        
        var twomile800 = twomiletime / 1600 * 800;
        var twomile1000 = twomiletime / 1600 * 1000;
        var twomile1200 = twomiletime / 1600 * 1200;
        var twomile1600 = twomiletime;
        var twomilerace = twomiletime * 2;

        var threemile1000 = threemiletime / 1600 *1000;
        var threemile1200 = threemiletime / 1600 * 1200;
        var threemile1600 = threemiletime; 
        var threemile2400 = threemiletime * 1.5;
        var threemilerace = threemiletime * 3;

        var CV800 = CVtime/1600 *800;
        var CV1000 = CVtime/1600 * 1000;
        var CV1200 = CVtime/1600 * 1200;
        var CV1600 = CVtime;

        var tempo1600 = tempotime;
        var upbeat1600 = upbeattime;

    }


    if (error) {
        alert("Error: please fill in all appropriate boxes.")
    }
    else {
        //output, is there a better way?
        document.getElementById("1-2").innerHTML = "200 in " +secToMinSec(half200);
        document.getElementById("1-3").innerHTML = "250 in " + secToMinSec(half250);
        document.getElementById("1-4").innerHTML = "400 in " + secToMinSec(half400);
        document.getElementById("1-6").innerHTML = "race time: " + secToMinSec(halfrace);

        document.getElementById("2-2").innerHTML = "300 in " +secToMinSec(mile300);
        document.getElementById("2-3").innerHTML = "400 in " + secToMinSec(mile400);
        document.getElementById("2-4").innerHTML = "600 in " + secToMinSec(mile600);
        document.getElementById("2-6").innerHTML = "race time: " + secToMinSec(milerace);

        document.getElementById("3-2").innerHTML = "800 in " +secToMinSec(twomile800);
        document.getElementById("3-3").innerHTML = "1000 in " + secToMinSec(twomile1000);
        document.getElementById("3-4").innerHTML = "1200 in " + secToMinSec(twomile1200);
        document.getElementById("3-5").innerHTML = "1600 in " + secToMinSec(twomile1600);
        document.getElementById("3-6").innerHTML = "race time: " + secToMinSec(twomilerace);

        document.getElementById("4-2").innerHTML = "1000 in " +secToMinSec(threemile1000);
        document.getElementById("4-3").innerHTML = "1200 in " + secToMinSec(threemile1200);
        document.getElementById("4-4").innerHTML = "1600 in " + secToMinSec(threemile1600);
        document.getElementById("4-5").innerHTML = "1.5 mile in " + secToMinSec(threemile2400);
        document.getElementById("4-6").innerHTML = "race time: " + secToMinSec(threemilerace);
        
        document.getElementById("5-2").innerHTML = "800 in " +secToMinSec(CV800);
        document.getElementById("5-3").innerHTML = "1000 in " + secToMinSec(CV1000);
        document.getElementById("5-4").innerHTML = "1200 in " + secToMinSec(CV1200);
        document.getElementById("5-5").innerHTML = "1600 in " + secToMinSec(CV1600);

        document.getElementById("6-2").innerHTML = "1600 in " +secToMinSec(tempo1600);
        document.getElementById("7-2").innerHTML = "1600 in " +secToMinSec(upbeat1600);
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

    if (newrace<3000)
        var output = "The calculated distance is " + Math.round(newrace * 100) / 100 + " meters" + "\n" +
            "or " + Math.round(newrace / 1609.34 * 1000) / 1000 + " miles.";
    else{
        var output = "The calculated distance is " + Math.round(newrace /1000 * 100) / 100 + " kilometers" + "\n" +
            "or " + Math.round(newrace / 1609.34 * 1000) / 1000 + " miles.";
    }
    return output;

}
function calcTime(pace) {
    var newrace = document.getElementById("newdistance").value;
    var newunits = document.getElementById("customunitsf").value;
    
    if (newunits == "miles"){
        newrace *= 1609.34;
    }

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