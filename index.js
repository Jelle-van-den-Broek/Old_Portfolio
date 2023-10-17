
window.onscroll = function () { scrollFunction(); scrollProgress() };

function scrollProgress() {
  var currentState = document.body.scrollTop || document.documentElement.scrollTop;
  var pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrollStatePercentage = (currentState / pageHeight) * 100;
  document.getElementById("progress").style.width = scrollStatePercentage + "%";
}



function web(){
  document.getElementById("FullScreenDisplayWeb").style.transform = "translateX(0vh)";
}

function game(){
  document.getElementById("FullScreenDisplayGame").style.transform = "translateX(0vh)";
}

function app(){
  document.getElementById("FullScreenDisplayApp").style.transform = "translateX(0vh)";
}

function webrev(){
  document.getElementById("FullScreenDisplayWeb").style.transform = "translateX(230vh)";
}

function gamerev(){
  document.getElementById("FullScreenDisplayGame").style.transform = "translateX(230vh)";
}

function apprev(){
  document.getElementById("FullScreenDisplayApp").style.transform = "translateX(230vh)";
}








function scrollFunction() {
  // Make header smaller when scoll down
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("Header").style.height = "10vh";
    document.getElementById("Header").style.zIndex = "1000px";
    document.getElementById("Header").style.top = "0";


    document.getElementById("stars").style.visibility = "hidden";
    document.getElementById("stars2").style.visibility = "hidden";
    document.getElementById("stars3").style.visibility = "hidden";

    document.getElementById("Header-Logo").getElementsByTagName("img")[0].style.marginTop = "0vh";
    document.getElementById("Header-Logo").getElementsByTagName("img")[0].style.height = "10vh";
    document.getElementById("Header-Logo").getElementsByTagName("img")[0].style.width = "10vh";
    document.getElementById("Header-Logo").getElementsByTagName("img")[0].style.marginLeft = "20px";
    document.getElementById("Header-Logo").getElementsByTagName("img")[0].style.transform = "rotateZ(0deg)";

    document.getElementById("Header-Buttons").style.marginTop = "0vh";
    document.getElementById("Header-Buttons").getElementsByTagName("li")[0].style.marginTop = "20px";
    document.getElementById("Header-Buttons").getElementsByTagName("li")[1].style.marginTop = "20px";
    document.getElementById("Header-Buttons").getElementsByTagName("li")[2].style.marginTop = "20px";
    document.getElementById("Header-Buttons").getElementsByTagName("li")[3].style.marginTop = "20px";

    document.getElementById("Header-Text").style.marginTop = "10px";
    document.getElementById("Header-Text").style.marginLeft = "150px";

    document.getElementById("Header-Text").style.visibility = "hidden";






    // Make header default when scoll up
  } else {
    document.getElementById("Header").style.height = "100vh";
    document.getElementById("Header").style.zIndex = "1000px";
    document.getElementById("Header").style.top = "0";


    document.getElementById("stars").style.visibility = "visible";
    document.getElementById("stars2").style.visibility = "visible";
    document.getElementById("stars3").style.visibility = "visible";

    document.getElementById("Header-Logo").getElementsByTagName("img")[0].style.marginTop = "35vh";
    document.getElementById("Header-Logo").getElementsByTagName("img")[0].style.height = "300px";
    document.getElementById("Header-Logo").getElementsByTagName("img")[0].style.width = "300px";
    document.getElementById("Header-Logo").getElementsByTagName("img")[0].style.marginLeft = "200px";
    document.getElementById("Header-Logo").getElementsByTagName("img")[0].style.transform = "rotateZ(45deg)";

    document.getElementById("Header-Buttons").style.marginTop = "50vh";
    document.getElementById("Header-Buttons").getElementsByTagName("li")[0].style.marginTop = "90px";
    document.getElementById("Header-Buttons").getElementsByTagName("li")[1].style.marginTop = "60px";
    document.getElementById("Header-Buttons").getElementsByTagName("li")[2].style.marginTop = "30px";
    document.getElementById("Header-Buttons").getElementsByTagName("li")[3].style.marginTop = "0px";

    document.getElementById("Header-Text").style.marginTop = "75px";
    document.getElementById("Header-Text").style.marginLeft = "550px";

    document.getElementById("Header-Text").style.visibility = "visible";



  }
}


