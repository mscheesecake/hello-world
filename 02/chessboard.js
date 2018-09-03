const boardSize = 8;
let chessboard = '';

for (let lineNumber = 1; lineNumber <= boardSize; lineNumber++) {
	for (let i = 1; i <= boardSize; i++) {
		chessboard += (lineNumber % 2) 
			? (i % 2) ? ' ' : '#'	
			: (i % 2) ? '#' : ' ';
		}
				
	chessboard += '\n'; 
}

console.log(chessboard);
