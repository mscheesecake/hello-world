/* Groups
The standard JavaScript environment provides another data structure called Set.
Like an instance of Map, a set holds a collection of values. 
Unlike Map, it does not associate other values with those—it just tracks 
which values are part of the set. A value can be part of a set only 
once—adding it again doesn’t have any effect.

Write a class called Group (since Set is already taken). 
Like Set, it has add, delete, and has methods. Its constructor creates an 
empty group, add adds a value to the group (but only if it isn’t already a 
member), delete removes its argument from the group (if it was a member), 
and has returns a Boolean value indicating whether its argument is a member 
of the group.

Use the === operator, or something equivalent such as indexOf, to determine 
whether two values are the same.

Give the class a static from method that takes an iterable object as argument 
and creates a group that contains all the values produced by iterating over it.

ITERABLE GROUPS
Make the Group class from the previous exercise iterable. 
Refer to the section about the iterator interface earlier in the chapter 
if you aren’t clear on the exact form of the interface anymore.

If you used an array to represent the group’s members, don’t just return 
the iterator created by calling the Symbol.iterator method on the array. 
That would work, but it defeats the purpose of this exercise.

It is okay if your iterator behaves strangely when the group is modified 
during iteration.

// Your code here (and the code from the previous exercise)

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c */


class Group {
	constructor (data) {
		this.data = [];
	}
	has (value) {
		return this.data.includes(value)
	}
	add (value) {
		if (!this.has(value)) {
		this.data.push(value);
		}
	}
	delete (value) {
		return this.data = this.data.filter(element => element !== value);
	}
	static from (iterable) {
		let group = new Group;
		for (let value of iterable) {
			group.add(value);
		}
		return group;
	}
	[Symbol.iterator]() {
		return new GroupIterator(this)
	}
}

class GroupIterator {
	constructor (group) {
		this.group = group;
		this.position = 0;
	}
	next(){
		if (this.position >= this.group.data.length) {
			return {done: true};
		} else {
			let element = {value: this.group.data[this.position], done: false};
			this.position++;
			return element;
		}
	}
}

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}

/*
console.log(group.has(10));
console.log(group.has(30));
group.add(10);
group.delete(10);
console.log(group.has(10));
*/