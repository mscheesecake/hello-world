/* Write a function arrayToList that builds up a list structure like the one 
shown when given [1, 2, 3] as argument. Also write a listToArray function 
that produces an array from a list. Then add a helper function prepend, 
which takes an element and a list and creates a new list that adds the 
element to the front of the input list, and nth, which takes a list and 
a number and returns the element at the given position in the list 
(with zero referring to the first element) or undefined when there is no such 
element. */

let list = null;

function arrayToList(array) {
	for (let i = array.length-1; i >= 0; i--) {
		list = {value: array[i], rest: list}
	}
	return list;
}

console.log(arrayToList([10,20]))
