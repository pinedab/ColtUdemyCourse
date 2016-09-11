//var answer = prompt("Are we there, yet?");

// VERSION 1
// Runs One Time
//if (answer === "ya" || answer === "yeah" || answer === "yes") {
//	alert("YAY, We made it!");
//} else {
//	answer;
//}

//VERSION 2
//While loop repeats until you say yes
//while(answer !== "yes" && answer !== "yeah") {
// apparently can't use the || operator in a while loop
//	var answer = prompt("Are we there, yet?");
//} 
//alert("YAY, We made it!");
//

//BONUSS
//if user types a phrase with the word yes or yeah
// it should still work
// Using .indexOf() lets us see the position of
//whatever is in the parentheses within the data its after
//
//Side note: If position is -1  = that the parameter
// is not in the data
//

var answer = prompt("Are we there, yet?");

//VERSION 3
while(answer.indexOf("ya") === -1 && answer.indexOf("yes") === -1 && answer.indexOf("yeah") === -1) {
// apprantly can't use the || operator in a while loop
	var answer = prompt("Are we there, yet?");
} 
alert("YAY, We made it!");
