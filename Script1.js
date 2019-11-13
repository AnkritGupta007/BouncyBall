var interval = 05;
var bouncy = document.getElementById("bouncyball");
var width = window.innerWidth;
var height = window.innerHeight;
var xPosition = parseInt(bouncy.style.left.replace("px", ""));

var yPosition = parseInt(bouncy.style.top.replace("px", ""));



var moveX = 3;
var moveY = 4;
setInterval(function () {
    
    
    //Moves the ball to the left and right
    if (xPosition < width - 20 && xPosition > 2) {
        xPosition += moveX;
    }
    else {
        moveX = moveX * -1;
        xPosition += moveX;
    }
    bouncy.style.left = xPosition + "px";
    //Moves the ball up and down
    if (yPosition < height - 20 && yPosition > 2) {
        yPosition += moveY;
    }
    else {
        moveY = moveY * -1;
        yPosition += moveY;
    }
    bouncy.style.top = yPosition + "px";

}, interval);






















