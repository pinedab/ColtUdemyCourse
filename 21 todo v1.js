var todos = [];

var input = prompt("What would you like to do?");

while(input !== "quit") {
	//handle input
	if (input === "list") {
	console.log(todos);
} else if (input === "new") {
	//ask for a new todo
	var newTodo = prompt("Enter new todo")
	//add to todos array
		todos.push(newTodo);
	} 
	//ask again for new input
	input = prompt("What would you like to do?");
}
console.log("OK, YOU QUIT THE APP");
