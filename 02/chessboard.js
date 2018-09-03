let boardSize = 8;
let chessboard = "";

for (let lineNumber = 1; lineNumber <= boardSize; lineNumber++) {
	for (let i = 1; i <= boardSize; i++) {
		if (lineNumber % 2 == 0) {
			chessboard += (i % 2 === 0) ? " " : "#";	
		} else {
			chessboard += (i % 2 === 0) ? "#" : " ";
		}
			
	}	
	chessboard += "\n"; 
}

console.log(chessboard);

