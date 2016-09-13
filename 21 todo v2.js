var todos = [];

var input = prompt("What would you like to do?");

while(input !== "quit") {
	//handle input
	if (input === "list") {
		listTodos();
	} else if (input === "new") {
		addTodos();
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
function deleteTodos() {
	//ask for index of todo to be deleted
	var index = prompt("What index would you like to delete? (Enter a number)");
	//delete that todo
	//.splice() will make a cut 
	//and then remove # we say so
	s//starting w the first param
	todos.splice(index, 1);
	console.log("Deleted Todo");}