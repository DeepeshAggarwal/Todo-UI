import { constants } from '../../common/constants';

const actions = constants.actions.task;
const defaultState = {
  'currentFilter': {
    name: 'Inbox',
    start_date: new Date(new Date(null).toDateString()),
    end_date: new Date(new Date(new Date().setYear(2050)).toDateString()),
    isCompleted: false
  }
};

let nextTaskId = 4;

export default function(state = {}, action) {
	let newState = {};
	switch (action.type) {
		case actions.ADD_TASK:
			action.payload.id = nextTaskId++;
			newState = {
				...state,
				tasks: (state.tasks || []).concat(action.payload)
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
			newState = {
				...state,
				currentFilter: defaultState.currentFilter
			};
			break;
	}
	return newState;
};