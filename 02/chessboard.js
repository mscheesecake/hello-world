let size = 8;
let line = "";

for(let linenumb =1; linenumb <= size; linenumb++){
	if(linenumb % 2 == 0){
		for(let i = 1; i <= size; i++){
			if(i % 2 === 0){
				line += " ";
			} else {line += "#"};
		}
		line += "\n";
	} else {
		for(let i = 1; i <= size; i++){
			if(i % 2 === 0){
				line += "#";
			} else {line += " "};
		}
		line += "\n";
	}	 
}

console.log(line);

