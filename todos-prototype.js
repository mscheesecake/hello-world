function Todos (todoList, count) {
	this.todoList = [];
	this.count = 1;
}

Todos.prototype.addTodo = function (name) {
	let todo = { name: name, done: false };
	return this.todoList.push(todo);
}

Todos.prototype.markAllAs = function (status) {
		const changeDone = (todo) => {
		let doneTodo = { name: todo.name, done: status } 
		return doneTodo
	}
	todos = todos.map(changeDone)
}

Todos.prototype.markAllAsDone = function () {
	markAllAs(true)
}

Todos.prototype.markAllAsNotDone = function () {
	markAllAs(false)
}

Todos.prototype.getNotDoneTodosString =  function () {
	let notDoneTodos = todos.filter(todo => todo.done === false)
	let strings = notDoneTodos.map(todo => todo.name)
	let result = strings.join(', ')
	return result
}

Todos.prototype.getDoneTodosString = function () {
	let notDoneTodos = todos.filter(todo => todo.done === true)
	let strings = notDoneTodos.map(todo => todo.name)
	let result = strings.join(', ')
	return result
}

Todos.prototype.printTodos = function () {
	return "Zrobilam juz: " + getDoneTodosString() + ", mam do zrobienia: " + getNotDoneTodosString()
}

let newList1 = new Todos;
let newList2 = new Todos;

newList1.addTodo("isc spac");
console.log(newList1.todoList);
