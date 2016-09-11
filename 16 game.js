//create sexret number
var number = 4;
//ask user for guess
var stringGuess = prompt("Guess what number I'm thinking of!");
var guess = Number(stringGuess);
//check guess
if (guess === number) {
	alert("You got it right!");
}
//otherwise
else if (guess < number) {
	alert("Too low, try again!");
	guess;
}
else {
	alert("Too high, try again!");
	
}



