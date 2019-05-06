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

const signUp = userInfo => dispatch => {
	dispatch(signUpLoading());
	httpHelper.post('http://localhost:3001/signUp', userInfo)
	.then(response => {
		dispatch(signUpCompletion(response))
	}).catch(error => {
		dispatch(signUpError(error.response.body.message))
	})
};

const signInLoading = () => ({
	type: constants.actions.signIn.SIGN_IN_LOADING
})

const signInCompletion = response => ({
	type: constants.actions.signIn.SIGN_IN_COMPLETE,
	payload: response
})

const signInError = error => ({
	type: constants.actions.signIn.SIGN_IN_ERROR,
	payload: error
})

const signIn = userInfo => dispatch => {
	dispatch(signInLoading());
	httpHelper.post('http://localhost:3001/signIn', userInfo)
	.then(response => {
		dispatch(updateUserState(response.body));
		dispatch(signInCompletion(response.body))
	}).catch(error => {
		dispatch(signInError(error.response.body.message))
	})
};

const validateCompletion = response => ({
	type: constants.actions.validate.VALIDATE_COMPLETE
})

const validateError = error => ({
	type: constants.actions.validate.VALIDATE_ERROR,
	payload: error
})

const validationLoading = () => ({
	type: constants.actions.validate.VALIDATE_LOADING
})

//TODO have to change to send right sign in validation event
const signInValidationNotification = () => ({
	type: constants.actions.signIn.VALIDATE_NOTIFICATION
})

const validate = token => dispatch => {
	dispatch(validationLoading());
	let url = 'http://localhost:3001/validate?token=' + token;
	httpHelper.get(url)
	.then(response => {
		dispatch(signInValidationNotification())
		dispatch(validateCompletion(response))
	}).catch(error => {
		dispatch(validateError(error.response.body.message))
	})	
}

const updateUserState = user => ({
	type: constants.actions.user.UPDATE_ME,
	payload: user
})

const initValidationLoading = () => ({
	type: constants.actions.init.VALIDATION_LOADING	
})

const initValidationComplete = body => ({
	type: constants.actions.init.VALIDATION_COMPLETE	
})

const initValidateToken = token => dispatch => {
	// dispatch(initValidationLoading())
	let url = 'http://localhost:3001/validate?token=' + token;
	httpHelper.get(url)
	.then(response => {
		dispatch(updateUserState(response.body));
		dispatch(signInCompletion(response.body))
		// dispatch(initValidationComplete(response.body))
	}).catch(error => {
		// dispatch(initValidationError(error.response.body.message))
	})	
}

export default {
	addTask,
	taskCompleted,
	updateFilter,
	signUp,
	validate,
	signIn,
	initValidateToken
};
