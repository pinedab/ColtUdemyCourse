//Write conditionals based as if you were a bouncer

var age = prompt("How old are you?");
//if age is negative
if (age < 0) {
	console.log("Come back when you are out the womb!");
}
//if age is less than 18
else if ( age < 18) {
	console.log("Come back when you are old enough!");
}
//if age is less than 21
else if (age < 21) {
	console.log("Welcome, but no drinking allowed for you!");
}
//if age is 21
else if (age === 21) {
	console.log("Happy BIRTHDAY! Have a free shot!");
}
else {
	console.log("WELCOME! Have drinks and have fun!");
}

//BONUS
//if age is odd

if (age % 2 !== 0) {
	console.log("Looks like your age is odd!");
}

// if age is a perfect square
if (age > 0 && Math.sqrt(age) % 1 === 0) {
	console.log("Looks like your age is a perfect square");
}
