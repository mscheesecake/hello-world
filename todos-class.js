class Todos {
	constructor () {
		this.todoList = [];
		this.count = 1;
	}
	addTodo (name) {
		let todo = { name: name, done: false };
		return this.todoList.push(todo);
	}
	markAllAs (status) {
		const changeDone = (todo) => {
			let doneTodo = { name: todo.name, done: status };
			return doneTodo;
		}
		todos = todos.map(changeDone);
	}
	markAllAsDone () {
		markAllAs(true);
	}
	markAllNotDone () {
		markAllAs(false);
	}
	getSameStatus (status) {
		let sameStatus = todos.filter(todo => todo.done === status);
		let strings = sameStatus.map(todo => todo.name);
		let result = strings.join(', ');
		return result;
	}
	getNotDoneTodosString () {
		getSameStatus(false);
	}
	getDoneTodosString () {
		getSameStatus(true);
	}
	printTodos () {
		return "Zrobilam juz: " + getDoneTodosString() + ", mam do zrobienia: " + getNotDoneTodosString();
	}

}
