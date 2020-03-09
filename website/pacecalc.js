
// making the page calculator work 
//calculate button
document.getElementById("presetcalcbutton").addEventListener("click", calcPreset);
document.getElementById("customcalcbutton").addEventListener("click", calcCustomPace);

function calcPreset(){
    document.getElementById("calculatedpace").innerHTML = "hi";


}

function calcCustomPace() {
    var output = "Error"
   

    var initialrace = document.getElementById("originaldistance").value;
    var newrace =  document.getElementById("newdistance").value;
    var sec = document.getElementById("customseconds").value; 
    var min = document.getElementById("customminutes").value;
    var hr = document.getElementById("customhours").value;
    
    var sectotal = parseFloat(hr)*3600 + parseFloat(min)*60 + parseFloat(sec);
    var pace = sectotal/initialrace;
    var newtime = pace*newrace;

    var newhr = Math.floor(parseFloat(newtime)/3600);
    var newmin = Math.floor(parseFloat(newtime-newhr*3600)/60);
    var newsec = Math.round(parseFloat(newtime-newhr*3600-newmin*60)*100)/100;

    if (newmin<=9){
        newmin = ""+0+newmin;
    }
    if (newsec<=9){
        newsec = ""+0+newsec;
    }

    output = "the calculated time is " + newhr +":"+newmin+":"+newsec;

    document.getElementById("calculatedpace").innerHTML = output;
    
}

