// code to print lyrics to 99 bottles of beer on the wall
// Written in Chrome browser 

var count = 99;

function beerWall() {

    while (count >= 0) {
        if (count > 0) {
            console.log( count + " bottles of beer on the wall, " + count + " bottles of beer on the wall. Take 1 down, pass it around, " + (count -1) + " bottles of beer on the wall");
        } else {
            console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store, buy some more, 99 bottles of beer on the wall.");
        }
        count--;

    }
        
}

beerWall()