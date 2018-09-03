let size = 8;
let line = "";

for(let lineNumber = 1; lineNumber <= size; lineNumber++){
	for(let i = 1; i <= size; i++){
		if(lineNumber % 2 == 0){
			line += (i % 2 === 0) ? " " : "#";	
		} else {
			line += (i % 2 === 0) ? "#" : " ";
		}
			
	}	
	line += "\n"; 
}

console.log(line);

