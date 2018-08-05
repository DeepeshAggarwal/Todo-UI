import { ADD_TASK, TASK_COMPLETED } from '../../common/constants';

const addTask = task => ({
	type: ADD_TASK,
	payload: task
});

const taskCompleted = taskId => ({
	type: TASK_COMPLETED,
	payload: taskId
});

export default {
	addTask,
	taskCompleted
};
