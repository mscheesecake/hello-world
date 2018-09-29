let todos = {
	todosList: [],
	count: 1,
	addTodo: function (name) {
		let todo = {
			id: this.count++,
			name: name,
			done: false,
		}
		return this.todosList.push(todo);
	},
	markAllAsDone: function () {
		this.todosList.forEach((todo) => todo.done = true)
	},
	removeTodo: function (id) {
		function findId (todo) {
			return todo.id !== id 
		}
		this.todosList = this.todosList.filter(findId)
	},
	removeAll: function () {
		 this.todosList = [];
	},
	removeAllDone: function () {
		function findDone (todo) {
			return todo.done !== true
		}
		this.todosList = this.todosList.filter(findDone) 
	},
	markAsDone: function (id) {
		this.markAs(id, true)
	},
	markAsNotDone: function (id) {
		this.markAs(id, false)
	},
	markAs: function (id, isDone) {
		let index = this._findIndex(id) 
		this.todosList[index].done = isDone
	},
	_findIndex: function (id) {
		return this.todosList.findIndex((todo) => todo.id === id)
	}
} 
//chyba najwazniejsze metody juz masz :)
// umiesz zrobic markAs te uywajc forEach? moze i umiem, to      zrob nie dzis
///to jutro, prawie tak samo, musisz tylko sprawdzic czy ten todo ma odpowiedni id
//i tyle k; zauwazylas jak duzo sposobow jest na zrobienie tego samego?
//i kazzdy moj jest zly ;d
///co do id to jeszcze zboaczysz jak w prawdziwej aplikacji
//bedziesz miala wiele id :D
// id ktorym sobie numerujesz tak jak tu, oraz 
// id na serwerze, jak pobierasz lub modyfikuejsz dane na serwerze
//to bedziesz musial uzyc tego drugiego id ;p
 //ide spac, ok

todos.addTodo("nic nie musze robic");
//console.log(todos.todosList); 
todos.addTodo("musze zaczac robic wiecej zadan");
todos.addTodo("musze zaczac bardziej sluchac")
//todos.markAllAsDone();
//console.log(todos.todosList);
//todos.removeTodo(1);
//console.log(todos.todosList);
//todos.removeAll();
//console.log(todos.todosList);
todos.markAsDone(2);
//console.log(todos.todosList)
//todos.markAsNotDone(2)
console.log(todos.todosList)
//markAsNotDone
// btw duzo tego jeszcze masz?
//pokaze ci jak mozna to jeszcze bardziej jak to sie mowi po polsku?
//usunac duplikacje?


//cos latwego removeAll()
//co jeszcze? napraw markAlladdone a co zle jest?
//o wiem gdzie jest blad ;p
//jak oznaczasz jako done wszystkie to usuwasz id, bo zapominamy
//go dodac do nowego obiektu 
//dalej nie dziala

//zastanow sie jak zrobic remove todo
//to jednak nie dziala 
//przetestuj dodaj jakies todo, wyswietl liste, oznacz jako zrobione, wyswietl listse
/*
Zadanie na dzis to:
- zastanowic sie nad tym czy funkcje te moga byc pure
- nastepnie utworzyc obiekt todos, o takiej strukturze:

const todosObj = {
	todos: [],
	addTodo: function () {},
	markAllAsDone: function () {},
}

Czym sie beda roznic te metody, od funkcji ktore juz masz?
Uzyj THIS NA PEWNO MI SIE UDA, TAK CZUJE. XD


bedziesz go uzywala tak:

todos.AddTodo("test")
todos.markAllAsDone()


--------
-nastepnie, utworzysz klase, dzieki ktorej bedzisez mogla
tworzyc takie obiekty, nowe todolisty

const listaMoja = new Todos()

const listaKogos = new Todos()

listaMoja.addTodo("moje zadanie, nie kogos")
*/