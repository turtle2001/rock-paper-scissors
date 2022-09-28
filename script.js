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

//will continue to run of player wants to continue playing
while (playAgain) {
    //asks user for input
    var userInput = prompt("Do you wanna choose r, p, or s?").toLocaleLowerCase;
    //creates computer input
    var compInput = rpsArray[Math.floor(Math.random() * 3)];

    //player can stop playing by pressing cancel
    if (!userInput)
        break;

    //if player enters invlaid input, asks them to retry
    while ((userInput !== rpsArray[0]) && (userInput !== rpsArray[1]) && (userInput !== rpsArray[2])) {
        alert("Please choose r, p, or s only. Invalid input");
        userInput = prompt("Do you wanna choose r, p, or s?");
        //player can stop playing here
        if (!userInput)
            break;
    }

    //checks for tie
    if (userInput == compInput) {
        isTie++;
        alert("You tied with the computer");
    }
    //checks for player win
    else if (((userInput == "r") && (compInput == "s")) || ((userInput == "p") && (compInput == "r")) || ((userInput == "s") && (compInput == "p"))) {
        isWin++;
        alert("You won against a computer, congrats!");
    }
    //chceks if player stopped playing
    else if (userInput == undefined)
        break;
    //all other scenarios are loss
    else {
        isLost++;
        alert("You lost against a computer. HAHA");
    }

    //displays stats
    alert("Tie: " + isTie + "\n" +
        "Win: " + isWin + "\n" +
        "Lost: " + isLost + "\n" +
        "You chose: " + userInput + "\n" +
        "The computer chose: " + compInput);

    //asks if user wants to continue playing
    playAgain = confirm("Play again?");
}