import { constants } from '../../common/constants';

const actions = constants.actions.task;
let nextTaskId = 4;

export default function(state = {}, action) {
	let newState = {};
	switch (action.type) {
		case actions.ADD_TASK:
			action.payload.id = nextTaskId++;
			newState = {
				...state,
				tasks: state.tasks.concat(action.payload)
			};
			break;
		case actions.TASK_COMPLETED:
			newState = {
				...state,
				tasks: state.tasks.map(task => {
					let newTask =
						task.id === action.payload ? { ...task, isCompleted: true } : task;
					return newTask;
				})
			};
			break;
		case actions.UPDATE_FILTER:
			newState = {
				...state,
				currentFilter: action.payload
			};
			break;
		default:
			newState = state;
			break;
	}
	return newState;
};