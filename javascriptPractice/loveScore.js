// calcualtes love score between two people
// random number generator between 1-100%
// written in Chrome browser

var lovePercent = Math.random() * 100 ; 
var lovePercent = Math.floor(lovePercent) + 1;

if (lovePercent > 70) {
    console.log ("Your love score is " + lovePercent + "%" + " You love each other like Kanye loves Kanye");
} 

if (lovePercent > 30 && lovePercent <= 70) {
    console.log ("Your love score is " + lovePercent + "%");

}

if (lovePercent <= 30) {
    console.log ("Your love score is " + lovePercent + "%. You go together like water and oil.");

}