import React from 'react';

const validation = (props) => {
	let validationResult = 'Text is too short';
	if (props.inputLength >=5) {
		validationResult = 'Text is long enough'
	}
	return (
		<div>
			<p>{validationResult}</p>
		</div>
	)
}

export default validation;
