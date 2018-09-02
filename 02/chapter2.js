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

//while and do loops

let d = 0;
while (d <10) {
	console.log(d);
	d = d + 2;
}

let wynik = 1;
let wykladnik = 0;
while (wykladnik < 10){
	wynik = wynik * 2;
	wykladnik  = wykladnik + 1;
}

console.log(wynik);

//for loops

for (let num = 0; num <=6; num = num +2){
	console.log(num);
}

//ex1 half of christmas tree

for (let branch = "#"; branch.length <= 7; branch = branch + "#"){
	console.log(branch);
}
