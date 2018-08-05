import { ADD_TASK, TASK_COMPLETED } from '../../common/constants';

const nextTaskId = 4;
const defaultState = {
	currentFilter: 'Inbox',
	isLoggedIn: true,
	tasks: [
		{ id: 1, name: 'First Task', isCompleted: false },
		{ id: 2, name: 'Second Task', isCompleted: false },
		{ id: 3, name: 'Third Task', isCompleted: true }
	]
};

const RootReducer = function(state = defaultState, action) {
	let newState = {};
	switch (action.type) {
		case ADD_TASK:
			action.payload.id = nextTaskId++;
			newState = {
				...state,
				tasks: state.tasks.concat(action.payload)
			};
			break;
		case TASK_COMPLETED:
			newState = {
				...state,
				tasks: state.tasks.map(task => {
					let newTask =
						task.id === action.payload ? { ...task, isCompleted: true } : task;
					return newTask;
				})
			};
			break;
		default:
			newState = state;
	}
	return newState;
};

export default RootReducer;
