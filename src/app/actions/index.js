import {
	ADD_TASK,
	TASK_COMPLETED,
	UPDATE_FILTER
} from '../../common/constants';
import { constants } from './../../common/constants';
import httpHelper from './../../lib/httpHelper';

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

const signUpLoading = () => ({
	type: constants.actions.signUp.SIGN_UP_LOADING
})

const signUpCompletion = response => ({
	type: constants.actions.signUp.SIGN_UP_COMPLETE,
	payload: response
})

const signUpError = error => ({
	type: constants.actions.signUp.SIGN_UP_ERROR,
	payload: error
})

const validateCompletion = response => ({
	type: constants.actions.validate.VALIDATE_COMPLETE
})

const validateError = error => ({
	type: constants.actions.validate.VALIDATE_ERROR,
	payload: error
})

const validationLoading = () => {
	type: constants.actions.validate.VALIDATE_LOADING
}

const signUp = userInfo => dispatch => {
	dispatch(signUpLoading());
	httpHelper.post('http://localhost:3001/signUp', userInfo)
	.then(response => {
		dispatch(signUpCompletion(response))
	}).catch(error => {
		debugger;
		dispatch(signUpError(error.response.body.message))
	})
};

const validate = token => dispatch => {
	dispatch(validationLoading());
	let url = 'http://localhost:3001/validate?token=' + token;
	httpHelper.get(url)
	.then(response => {
		dispatch(validateCompletion(response))
	}).catch(error => {
		debugger;
		dispatch(validateError(error))
	})	
}

export default {
	addTask,
	taskCompleted,
	updateFilter,
	signUp,
	validate
};
