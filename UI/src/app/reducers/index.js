import { ADD_TASK } from '../../common/constants';

const defaultState = {
	currentFilter: 'Inbox',
	isLoggedIn: true,
	tasks: [
		{ name: 'First Task', isCompleted: false },
		{ name: 'Second Task', isCompleted: false },
		{ name: 'Third Task', isCompleted: false }
	]
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
