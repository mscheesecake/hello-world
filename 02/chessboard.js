let size = 8;
let line = "";

for(let linenumb =1; linenumb <= size; linenumb++){
	for(let i = 1; i <= size; i++){
		if(linenumb % 2 == 0){
			line += (i % 2 === 0) ? " " : "#";	
		} else {
				line += (i % 2 === 0) ? "#" : " ";
		}
			
	}	
		line += "\n"; 
}

console.log(line);

