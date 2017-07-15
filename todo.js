var todos = [];

//prompt for direction
var input = prompt("What would you like to do?");

while (input != "quit") {
    //handle input
    if (input === "list") {
        console.log(todos);
    } else if (input === "new") {
        //ask for new todo
        var newTodo = prompt("Enter new todo.");
        todos.push(newTodo);
    }
    //ask again for new input
    input = prompt("What would you like to do?");
}
console.log("OK, you quit the app!");
