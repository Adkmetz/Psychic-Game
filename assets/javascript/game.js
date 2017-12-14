var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;
var computerGuess = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var computerGuess = computerGuess[Math.floor(Math.random()*computerGuess.length)];

var updateGuessesLeft = function() {
	document.querySelector('#guessesLeft').innerHTML = "Number of guesses left: " + guessesLeft;
};

var updateLetterToGuess = function() {
  this.letterToGuess = this.computerGuess[Math.floor(Math.random() * this.computerGuess.length)];
};

var updateGuessedLetters = function() {
	document.querySelector('#guessedLetters').innerHTML = "Your guesses: " + guessedLetters;
};

var reset = function() {
	totalGuesses = 9;
	guessesLeft = 9;
	guessedLetters = [];

	updateGuessesLeft();
	updateGuessedLetters();
	updateLetterToGuess();
}

updateLetterToGuess();

document.onkeyup = function() {
		guessesLeft--;
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	guessedLetters.push(userGuess);
	updateGuessedLetters();
	updateGuessesLeft();

		if (guessesLeft > 0){
            if (userGuess===computerGuess){
                wins++, reset();
                alert("YOU'RE RIGHT! CREEPY!"); 
                document.querySelector('#wins').innerHTML = "Wins: " + wins;                      
        		} 

        } else if (guessesLeft == 0){ 
            losses++, reset();
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            alert("You lost, do better. The letter was " + letterToGuess + ".");
        	}    
};