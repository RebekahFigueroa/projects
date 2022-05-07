// identifies if the name is part of the guest list
// written in Chrome browser

var guestList = ["Angela" , "Jack" , "Pam" , "James" , "Lara" , "Jason"];

var potentialGuest = prompt("What is your name?");

if (guestList.includes(potentialGuest)) {
    console.log("Welcome");
    } else {
        console.log("Sorry, you're not invited");
    }
