import {
	ADD_TASK,
	TASK_COMPLETED,
	UPDATE_FILTER
} from '../../common/constants';

let nextTaskId = 4;
const defaultState = {
	currentFilter: {
		name: 'Inbox',
		start_date: new Date(new Date(null).toDateString()),
		end_date: new Date(new Date(new Date().setYear(2050)).toDateString()),
		isCompleted: false
	},
	isLoggedIn: true,
	tasks: [
		{
			id: 1,
			name: 'First Task',
			isCompleted: false,
			due_date: 'Sat Aug 11 2018 00:00:00'
		},
		{
			id: 2,
			name: 'Second Task',
			isCompleted: false,
			due_date: 'Sat Aug 5 2018 00:00:00'
		},
		{
			id: 3,
			name: 'Third Task',
			isCompleted: false,
			due_date: 'Sat Aug 8 2018 00:00:00'
		},
		{
			id: 4,
			name: 'Fourth Task',
			isCompleted: false,
			due_date: 'Sat Aug 8 2018 00:00:00'
		}
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
		case UPDATE_FILTER:
			newState = {
				...state,
				currentFilter: action.payload
			};
			break;
		default:
			newState = state;
	}
	return newState;
};

export default RootReducer;
