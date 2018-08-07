import {
	ADD_TASK,
	TASK_COMPLETED,
	UPDATE_FILTER
} from '../../common/constants';

const addTask = task => ({
	type: ADD_TASK,
	payload: task
});

const taskCompleted = taskId => ({
	type: TASK_COMPLETED,
	payload: taskId
});

const updateFilter = filter => ({
	type: UPDATE_FILTER,
	payload: filter
});

export default {
	addTask,
	taskCompleted,
	updateFilter
};
