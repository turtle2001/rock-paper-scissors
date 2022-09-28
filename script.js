// We have R, P, S
// Computer generated index that calls on the array for [R, P, S]
// After input from user, take input and compare to the logic of RockPaperScissor where:
// Rock > Scissor
// Paper > Rock
// Scissor > Paper
// Edge Case
//
// If input = random input, then it is a tie

var rpsArray = ["R", "P", "S"];
var userInput = prompt("Do you wanna choose R, P, or S?");
var compInput = rpsArray[Math.round(Math.random() * 3)];
var isTie = 0;
var isWin = 0;
var isLost = 0;
var playAgain = false;

while ((userInput !== rpsArray[0]) && (userInput !== rpsArray[1]) && (userInput !== rpsArray[2])) {
    alert("Please choose R, P, or S only. Invalid input");
    userInput = prompt("Do you wanna choose R, P, or S?");
};

if (userInput == compInput) {
    isTie++;
    alert("You tied with the computer");
    playAgain = confirm("Play again?");
} else if ((userInput == "R") && (compInput == "S")) {
    isWin++;
    alert("You won against a computer, congrats");
    playAgain = confirm("Play again?");
} else if ((userInput == "P") && (compInput == "R")) {
    isWin++;
    alert("You won against a computer, congrats");
    playAgain = confirm("Play again?");
} else if ((userInput == "S") && (compInput == "P")) {
    isWin++;
    alert("You won against a computer, congrats");
    playAgain = confirm("Play again?");
} else {
    isLost++;
    alert("You lost against a computer. HAHA");
    playAgain = confirm("Play again?");
};

if (playAgain = True) {
    userInput = prompt("Do you wanna choose R, P, or S?");
    compInput = rpsArray[Math.round(Math.random() * 3)];

}


console.log("Tie: " + isTie);
console.log("Win: " + isWin);
console.log("Lost: " + isLost);
console.log(compInput);
console.log(userInput);
