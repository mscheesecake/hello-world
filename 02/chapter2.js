// ex1 chapter2

let x = 30;
console.log("the value of x is ",x);

let y = 5;
console.log("If you want to get 100, you need to add " + (100-y) + " " + "to " + y );

let z = 45;
if (!Number.isNaN(z)){
	console.log("Your number is " + z);
}

let a = 3
if (!Number.isNaN(a)){
	console.log(a + " is a number.")
} else {
	console.log(a + " is not a number");
}

let c = 98;
if (c < 10) {
	console.log("Small");
} else if (c <100) {
	console.log("Medium");
} else {
	console.log("Large");
}