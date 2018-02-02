import {
	FETCH_GIFS
} from './types';

export const fetchGifs = (text) => {

	return {
		type: FETCH_GIFS,
		payload: text
	};
	
};