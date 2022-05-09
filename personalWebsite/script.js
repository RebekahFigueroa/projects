
// javascript for dice game

function getRandomNumber(numSides) {
    return Math.floor(Math.random() * numSides) + 1;
}

// created the link between the random number generated and dice image
var map = {
    1: "images/dice1.png",
    2: "images/dice2.png",
    3: "images/dice3.png",
    4: "images/dice4.png",
    5: "images/dice5.png",
    6: "images/dice6.png",
};

// button to click in order to refresh dice roll
function onClick() {

    var player1 = getRandomNumber(6);
    var player2 = getRandomNumber(6);

    // add selected image into HTML for players once a dice face is selected
    document.querySelector(".img1").src = map[player1] ?? "";
    document.querySelector(".img2").src = map[player2] ?? "";

    if (player1 > player2) {
        document.querySelector("h1").innerText="Player 1 Wins";
    } else if (player1 < player2) {
        document.querySelector("h1").innerText="Player 2 Wins";
    } else {
        document.querySelector("h1").innerText="Players Tied";
    }
}

document.querySelector(".btn").addEventListener("click", onClick)
