import React from 'react';

const userInput = ( props ) => {
	const style = {
		border: '3px solid pink',
		cursor: 'pointer',
		width: '20%'
	}

	return <input 
	type="text"
	style={style}
	onChange={props.changed} 
	value={props.currentUsername} />
}

export default userInput;
