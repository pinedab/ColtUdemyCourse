var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var correctColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var msgDisplay = document.querySelector("#msg");
var h1 = document.querySelector("h1");
var resetBtn = document.getElementById("new");
var easyBtn = document.getElementById("easy");
//var medBtn = document.getElementById("medium");
var hardBtn = document.getElementById("hard");

easyBtn.addEventListener("click", function(){
	this.classList.add("selected");
//	medBtn.classList.remove("selected");
	numSquares = 3;
	hardBtn.classList.remove("selected");
	colors = generateRandomColors(numSquares);
	correctColor = pickColor();
	colorDisplay.textContent = correctColor;
	//HIDE THE REMAINING SQUARES
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.background = colors[i];
		}
		else {
			squares[i].style.display = "none";
		}
	}
})

// medBtn.addEventListener("click", function(){
	// easyBtn.classList.remove("selected");
//	this.classList.add("selected");
//	hardBtn.classList.remove("selected");
//	numSquares = 6;
//	colors = generateRandomColors(numSquares);
//	correctColor = pickColor();
//	colorDisplay.textContent = correctColor;
	//HIDE THE REMAINING SQUARES
//	for (var i = 0; i < squares.length; i++) {
//		if (colors[i]) {
//			squares[i].style.background = colors[i];
//			squares[i].style.display = "block";
//		}
//		else {
//			squares[i].style.display = "none";
//		}
//	}
// })

hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
//	medBtn.classList.remove("selected");
	this.classList.add("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	correctColor = pickColor();
	colorDisplay.textContent = correctColor;
	//HIDE THE REMAINING SQUARES
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
	}
})

resetBtn.addEventListener("click", function(){
	//GENERATE ALL NEW COLORS
	colors = generateRandomColors(numSquares);
	//PICK A NEW RANDOM COLOR FROM ARRAY
	correctColor = pickColor();
	//CHANGE COLORDISPLAY TO MATCH CORRECTCOLOR
	colorDisplay.textContent = correctColor;
	//CHNAGE THE "Play again?" STRING
	this.textContent = "New Game";
	//WIPE THE SPAN FOR NEW GAME
	msgDisplay.textContent = "";
	//CHANGE COLORS OF SQUARES
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
	}
	h1.style.background = "steelblue";
})

colorDisplay.textContent = correctColor;

for (var i = 0; i < squares.length; i++) {
	//ADD INITIAL COLORS TO SQUARES
	squares[i].style.background = colors[i];
	//ADD CLICK LISTENERS TO SQUARES
	squares[i].addEventListener("click", function(){
		var selectedColor = this.style.background;
		if (correctColor === selectedColor){
			msgDisplay.textContent = "Correct!";
			resetBtn.textContent = "Play Again?"
			changeColors(selectedColor);
			h1.style.background = correctColor;

		} else {
			this.style.background = "#232323";
			msgDisplay.textContent = "Try Again!"
		}
	});
}

function changeColors(color) {
	//LOOP THROUGH ALL SQUARES
	for (var i = 0; i < squares.length; i++) {
		//CHANGE EA COLOR TO MATCH CORRECT/SELECTED COLOR
		squares[i].style.background = color;	
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array 
	var arr = [];
	//add num random colors to array
	for (var i = 0; i < num; i++) {
		//get random color and push that into arr
		arr.push(randomColor());		
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a red from 0 to 255
	var r = Math.floor(Math.random() * 256);
	//pick a red from 0 to 255
	var g = Math.floor(Math.random() * 256);
	//pick a red from 0 to 255
	var b = Math.floor(Math.random() * 256);
	//return a string with "rgb(r, g, b)"
	return "rgb(" + r + ", " + g + ", " + b +")";
}





