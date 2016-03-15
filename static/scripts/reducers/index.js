import { combineReducers } from 'redux';
import { actionTypes } from '../actions';

const reducers = (state = {}, action) => {
	switch (action.type) {
		case actionTypes.TOGGLE_HELLOWORLD:
			return { 
				...state, 
				...{visibility: !state.visibility}
			};
		default:
			return state;
	}
}

export default reducers;