//first dice

var randomNumber1 = Math.floor((Math.random() * 6) + 1);

var randomImageForLeftDice = "images/dice" + randomNumber1 + ".png";

document.querySelector("div .img1").setAttribute("src", randomImageForLeftDice);

// second dice
var randomNumber2 = Math.floor((Math.random() * 6) + 1);

var randomImageForRightDice = "images/dice" + randomNumber2 + ".png";

document.querySelector("div .img2").setAttribute("src", randomImageForRightDice);

//winner, looser and draw
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 wins!";
} else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!";
} else {
    document.querySelector("h1").innerHTML = "🚩Player 2 wins!";
}