document.getElementById("twitterHeader").addEventListener("click", changeTwitterStatus);


function changeTwitterStatus(){
    if (document.getElementById("twitter").style.display == ""){ //Twitter not displayed
        document.getElementById("twitter").style.display = "block"; //displays
        document.getElementById("twitterText").innerHTML = "Twitter &#x25B3" //changes arrow to up
    }
    else{ //Twitter already displayed
        document.getElementById("twitter").style.display = ""; //removes from display
        document.getElementById("twitterText").innerHTML = "Twitter &#x25BD"; //changes arrow to down
    }
}