// calculates if a year is a leap year based on input
// written in Chrome browser

function isLeap(year) {
    if (year % 100 !== 0  && 
        year % 4 === 0 ||
        year % 400 === 0) {
        console.log ("Leap year");
        } else {
            console.log("Not leap year.");
        }
    }
    
isLeap(2004)