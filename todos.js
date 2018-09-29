let todos = [
	{ name: "zrobic todoliste", done: false },
	{ name: "wyrzucic smieci", done: true}
];

function addTodo(name) {
	let todo = { name: name, done: false }
	return todos.push(todo)
}

function markAllAs(status) {
	const changeDone = (todo) => {
		let doneTodo = { name: todo.name, done: status } 
		return doneTodo
	}

	todos = todos.map(changeDone) //tu mapujesz po todos, wiec przypisujesz do todos to co zwraca map,
	//bo map zwraca zmodyfikowane todos, coolwiek masz przed .map, to do tego tez musisz przypisac wynik
}

function markAllAsDone() {
	markAllAs(true)
}

function markAllAsNotDone() {
	markAllAs(false)
}

function getNotDoneTodosString() {
	let notDoneTodos = todos.filter(todo => todo.done === false)
	let strings = notDoneTodos.map(todo => todo.name)
	let result = strings.join(', ')
	return result
}

function getDoneTodosString() {
	let notDoneTodos = todos.filter(todo => todo.done === true)
	let strings = notDoneTodos.map(todo => todo.name)
	let result = strings.join(', ')
	return result
}

function printTodos() {
	return "Zrobilam juz: " + getDoneTodosString() + ", mam do zrobienia: " + getNotDoneTodosString()
}

addTodo('zrobic pranie')
addTodo('1')
addTodo('2')
addTodo('3')
addTodo('posprzatac kuchnie')
console.log(printTodos())
console.log('=============')
markAllAsDone()
console.log(printTodos())