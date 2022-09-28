// We have r, p, s
// Computer generated index that calls on the array for [r, p, s]
// After input from user, take input and compare to the logic of rockPaperscissor where:
// rock > scissor
// Paper > rock
// scissor > Paper
// Edge Case
//
// If input = random input, then it is a tie

var rpsArray = ["r", "p", "s"];
var isTie = 0;
var isWin = 0;
var isLost = 0;
var playAgain = true;

while (playAgain) {
    var userInput = prompt("Do you wanna choose r, p, or s?");
    var compInput = rpsArray[Math.round(Math.random() * 3)];

    if (!userInput)
        break;

    while ((userInput !== rpsArray[0]) && (userInput !== rpsArray[1]) && (userInput !== rpsArray[2])) {
        alert("Please choose r, p, or s only. Invalid input");
        userInput = prompt("Do you wanna choose r, p, or s?");
        if (!userInput)
            break;
    }

    if (userInput == compInput) {
        isTie++;
        alert("You tied with the computer");
    }
    else if (((userInput == "r") && (compInput == "s")) || ((userInput == "p") && (compInput == "r")) || ((userInput == "s") && (compInput == "p"))) {
        isWin++;
        alert("You won against a computer, congrats!");
    }
    else if (userInput == undefined)
        break;
    else {
        isLost++;
        alert("You lost against a computer. HAHA");
    };

    alert("Tie: " + isTie + "\n" +
        "Win: " + isWin + "\n" +
        "Lost: " + isLost + "\n" +
        "You chose: " + userInput + "\n" +
        "The computer chose: " + compInput);

    playAgain = confirm("Play again?");
}