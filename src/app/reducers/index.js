import { combineReducers } from 'redux'
import init from './init';
import signUp from './signUp';
import todos from './todos';
import validate from './validate';

export default combineReducers({
	init,
	todos, 
	signUp,
	validate
})