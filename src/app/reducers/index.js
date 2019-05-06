import { combineReducers } from 'redux'
import init from './init';
import signUp from './signUp';
import signIn from './signIn';
import validate from './validate';
import todos from './todos';
import user from './user';

export default combineReducers({
	init,
	signUp,
	signIn,
	validate,
	todos,
	user
})