var numSquares = 12;
// var colors = generateRandomColors(numSquares);
var colors =[];
// var correctColor = pickColor();
var correctColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var msgDisplay = document.querySelector("#msg");
var h1 = document.querySelector("h1");
var resetBtn = document.getElementById("new");
//var easyBtn = document.getElementById("easy");
//var medBtn = document.getElementById("medium");
//var hardBtn = document.getElementById("hard");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	//mode button event listeners
	setUpModeButtons();
	//square event listeners
	setUpSquares();
	//resets everything you see	
	reset();
}

function setUpSquares(){
	for (var i = 0; i < squares.length; i++) {
		//ADD INITIAL COLORS TO SQUARES
		// squares[i].style.background = colors[i];
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
}

function setUpModeButtons(){
		for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			modeButtons[2].classList.remove("selected");
			modeButtons[3].classList.remove("selected");
			this.classList.add("selected");
			if(this.textContent === "Easy"){
				numSquares = 3;
			}
			else if (this.textContent === "Medium") {
				numSquares = 6;
			}
			else if (this.textContent === "Hard") {
				numSquares = 9;
			}
			else if (this.textContent === "Extreme"){
				numSquares = 12;
			}
			reset();
		})
	}
} 

function reset(){
	colors = generateRandomColors(numSquares);
	correctColor = pickColor();
	colorDisplay.textContent = correctColor;
	resetBtn.textContent = "New Game";
	msgDisplay.textContent = "";
	//HIDE THE REMAINING SQUARES
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		}
		else {
			squares[i].style.display = "none";
		}	
		}
	
	h1.style.background = "steelblue";
}

// easyBtn.addEventListener("click", function(){
// 	this.classList.add("selected");
// 	medBtn.classList.remove("selected");
// 	numSquares = 3;
// 	hardBtn.classList.remove("selected");
// 	colors = generateRandomColors(numSquares);
// 	correctColor = pickColor();
// 	colorDisplay.textContent = correctColor;
// 	//HIDE THE REMAINING SQUARES
// 	for (var i = 0; i < squares.length; i++) {
// 		if (colors[i]) {
// 			squares[i].style.background = colors[i];
// 		}
// 		else {
// 			squares[i].style.display = "none";
// 		}
// 	}
// })

// medBtn.addEventListener("click", function(){
// 	easyBtn.classList.remove("selected");
// 	this.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	correctColor = pickColor();
// 	colorDisplay.textContent = correctColor;
// 	//HIDE THE REMAINING SQUARES
// 	for (var i = 0; i < squares.length; i++) {
// 		if (colors[i]) {
// 			squares[i].style.background = colors[i];
// 			squares[i].style.display = "block";
// 		}
// 		else {
// 			squares[i].style.display = "none";
// 		}
// 	}
//  })

// hardBtn.addEventListener("click", function(){
// 	easyBtn.classList.remove("selected");
// 	medBtn.classList.remove("selected");
// 	this.classList.add("selected");
// 	numSquares = 9;
// 	colors = generateRandomColors(numSquares);
// 	correctColor = pickColor();
// 	colorDisplay.textContent = correctColor;
// 	//HIDE THE REMAINING SQUARES
// 	for (var i = 0; i < squares.length; i++) {
// 		squares[i].style.background = colors[i];
// 		squares[i].style.display = "block";
// 	}
// })

resetBtn.addEventListener("click", function(){
	// //GENERATE ALL NEW COLORS
	// colors = generateRandomColors(numSquares);
	// //PICK A NEW RANDOM COLOR FROM ARRAY
	// correctColor = pickColor();
	// //CHANGE COLORDISPLAY TO MATCH CORRECTCOLOR
	// colorDisplay.textContent = correctColor;
	// //CHNAGE THE "Play again?" STRING
	// this.textContent = "New Game";
	// //WIPE THE SPAN FOR NEW GAME
	// msgDisplay.textContent = "";
	// //CHANGE COLORS OF SQUARES
	// for (var i = 0; i < squares.length; i++) {
	// 	squares[i].style.background = colors[i];
	// }
	// h1.style.background = "steelblue";
	reset();
})

//THIS LINE NO LONGER NEEDED BC INSIDE THE INIT FUNCTION
//colorDisplay.textContent = correctColor;


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





