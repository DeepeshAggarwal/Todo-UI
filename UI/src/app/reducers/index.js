import { ADD_TASK } from '../../common/constants';

const defaultState = {
	currentFilter: '',
	isLoggedIn: true
};

const RootReducer = function(state = defaultState, action) {
	let newState = {};
	switch (action.type) {
		case ADD_TASK:
			newState = {
				...state,
				articles: state.articles.concat(action.payload)
			};
			break;
		default:
			newState = state;
	}
	return newState;
};

export default RootReducer;
