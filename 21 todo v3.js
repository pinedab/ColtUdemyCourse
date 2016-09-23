var todos = [];

var input = prompt("What would you like to do?");

while(input !== "quit") {
	//handle input
	if (input === "list") {
		listTodos();
	} else if (input === "new") {
		addTodo();
	} else if (input === "delete") {
		deleteTodo();
	} 

	//ask again for new input
	input = prompt("What would you like to do?");
}
console.log("OK, YOU QUIT THE APP");

function listTodos() {
	console.log("**********");
		todos.forEach(function(todo, i) {
			console.log(i + ": " +todo);
		});
		console.log("**********");}
function addTodo() {
	//ask for a new todo
	var newTodo = prompt("Enter new todo");
	//add to todos array
		todos.push(newTodo);
		console.log("Added Todo");}
function deleteTodo() {
	//ask for index of todo to be deleted
	var index = prompt("What index would you like to delete? (Enter a number)");
	//delete that todo
	//.splice() will make a cut 
	//and then remove # we say so
	//starting w the first param
	todos.splice(index, 1);
	console.log("Deleted Todo");}

//////////////////////////////////////////////
//CODE FOR VERSION B
//////////////////////////////////////////////

var lis = document.querySelectorAll("h4 ol li");

	for(var i = 0; i < lis.length; i++){
		lis[i].addEventListener("mouseover", function(){
		//Best practice
			this.classList.add("selected");
		//ALTERNATIVE Method
		//		this.style.color = "green";
		});
		lis[i].addEventListener("mouseout", function(){
		//BEST PRACTICE
			this.classList.remove("selected");
		//ALTERNATIVE Method
		//		this.style.color = "black";
		});	
		lis[i].addEventListener("click", function(){
			this.classList.toggle("done");
		});
	}
