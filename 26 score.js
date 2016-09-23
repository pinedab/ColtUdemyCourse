var p1btn = document.querySelector("#p1");
var p2btn = document.querySelector("#p2");

var p1Display = document.getElementById("p1Display");
var p2Display = document.getElementById("p2Display");

var p1Score = 0;
var p2Score = 0;

var gameOver = false;

var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("#limit");
var winningScore = 5;
var resetBtn = document.querySelector("#reset");

p1btn.addEventListener("click", function(){
	if (!gameOver){
		p1Score++;
			if(winningScore === p1Score) {
				p1Display.classList.add("winner");				
				gameOver = true;
			}
		p1Display.textContent = p1Score;
	}
});

p2btn.addEventListener("click", function(){
	if (!gameOver){
		p2Score++;
			if(winningScore === p2Score) {
				p2Display.classList.add("winner");
				gameOver = true;
			}
		p2Display.textContent = p2Score;
	}
});

resetBtn.addEventListener("click", function(){
		reset();
})

function reset(){
		p1Score = 0;
		p2Score = 0;
		p1Display.textContent = p1Score;
		p2Display.textContent = p2Score;
		p1Display.classList.remove("winner");
		p2Display.classList.remove("winner");
		gameOver = false;
}

numInput.addEventListener("change", function(){
	winningScoreDisplay.textContent = this.value;
	winningScore = Number(this.value);
	reset();
});

