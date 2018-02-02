import {
	FETCH_GIFS
} from '../actions/types';

const INITIAL_STATE = {
	gifObject: [],
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case FETCH_GIFS:
			return { ...state, gifObject: action.payload };
		default:
			return state;
	}

};
