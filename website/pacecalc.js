
// making the page calculator work 
//calculate button
document.getElementById("presetcalcbutton").addEventListener("click", calcPreset);
document.getElementById("customcalcbutton").addEventListener("click", calcCustomPace);


function calcPreset(){
    document.getElementById("calculatedpace").innerHTML = "hi";


}

function calcCustomPace() {
    var error = false;
    var output = "Error";
   
    var initialrace = document.getElementById("originaldistance").value;
    var initialunits = document.getElementById("customunitsi").value;

    // make sure the units are in meters for easy math
    if (initialunits == "miles"){
        initialrace*=1609.34;
    }
    else if (initialunits == "meters"){
        //proceed as normal
    }
    else{
        //sends an error message for bad inputs 
        error = true;
    }
    
    var sec = document.getElementById("customsecondsi").value; 
    var min = document.getElementById("customminutesi").value;
    var hr = document.getElementById("customhoursi").value;

    var sectotal = parseFloat(hr)*3600 + parseFloat(min)*60 + parseFloat(sec);
    var pace = sectotal/initialrace;//pace in seconds/meter
    
    //determine which kind of value to calculate
    var newrace =  document.getElementById("newdistance").value;
    var newsec = document.getElementById("customsecondsf").value;
    var newmin = 
    var newhr = 

    alert(hi);

    if(newrace == null && (newsec = null || newmin == null || newhr == null)){
        error = true;
    }
    else if (newrace == null){
        //this will set calcdistance as a default if no boxes are left unfilled
        output = calcDistance();
        alert("distance!");
    }
    else{
        output = calcTime();
        alert("time!");
    }


    if (error){
        alert("Error: please fill in all appropriate boxes.")
    }
    else {
        document.getElementById("calculatedpace").innerHTML = output;
    }
  
    
}

function calcDistance(){


}
function calcTime(){
    var newrace =  document.getElementById("newdistance").value;
    var newtime = pace*newrace;

    var newhr = Math.floor(parseFloat(newtime)/3600);
    var newmin = Math.floor(parseFloat(newtime-newhr*3600)/60);
    var newsec = Math.round(parseFloat(newtime-newhr*3600-newmin*60)*100)/100;

    if (newsec<=9){
        newsec = ""+0+newsec;
    }

    if (newhr==0){
        output = "the calculated time is "+newmin+":"+newsec;
    }
    else{
        if (newmin<=9){
            newmin = ""+0+newmin;
        }
        output = "the calculated time is " + newhr +":"+newmin+":"+newsec;
    }
}