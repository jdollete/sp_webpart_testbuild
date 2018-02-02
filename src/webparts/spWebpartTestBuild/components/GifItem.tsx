import * as React from 'react';

const GifItem = ({ gifUrl, gifOrigLink }) => {

	return (
		<div className="gif-image">
			<a href={gifOrigLink} target="_blank"><img src={gifUrl} alt="" /></a>
		</div>
	);

}

export default GifItem;