// Javascript for drum kit

//creating an action when the buttons are clicked 
var buttons = document.querySelectorAll(".drum");

for (i of buttons) {
    i.addEventListener("click", function() {
        this.style.color = "white";

    });
}


// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();