import axios from 'axios';
import {
	FETCH_GIFS
} from './types';

export const fetchGifs = () => {
	
	return (dispatch) => {
		dispatch({ type: FETCH_GIFS });

		axios.get('https://api.giphy.com/v1/gifs/trending?api_key=N7jGbYOebKSqhTe9Lq0tIz3gpiBU4bRE').then(response => {
			const responseData = response.data.data
			trendingFetchSuccess(dispatch, responseData);
		});
	}
	
};

const trendingFetchSuccess = (dispatch, responseData) => {
	dispatch({
		type: FETCH_GIFS,
		payload: responseData
	});
};