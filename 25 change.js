var btnL = document.querySelector("#left button");
var btnR = document.querySelector("#right button");
var left = document.querySelector("#left");
var right = document.querySelector("#right");
var colors = ["red","green","pink","blue","gray","purple","yellow","orange"];
var counter = 0;
var counter2 = 0;
var toggle = ["purple", "white"];
function change1() {
	var clicked = true;
	if(clicked){
		document.querySelector('span').textContent = colors[counter];
		left.style.background = colors[counter];
		counter++;
	}
	if(counter === colors.length) {
		counter = 0;
	}
}
function change2() {
	var clicked = true;
	if(clicked){
		document.querySelector('#right span').textContent = toggle[counter2];
		right.style.background = toggle[counter2];
		counter2++;
	}
	if(counter2 === toggle.length) {
		counter2 = 0;
	}	
}
btnL.addEventListener('click', change1);
btnR.addEventListener('click', change2);

//ALTERNATIVE FUNCTION TO CHANGE2
//var isPurple = false;
//function() {
//	if (isPurple) {
//			document.right.style.background = "white";
//		}
//	else {
//			document.right.style.background = "purple";
//		}
//	isPurple = !isPurple; 
//}

//SHORT ALTERNATIVE
//1.Add a class to html/css that is .purple{background:purple;}
//2. Use toggle on classList with .purple
// function(){
//	document.right.classList.toggle("purple");
//}