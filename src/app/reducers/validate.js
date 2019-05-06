import { constants } from '../../common/constants';

const actions = constants.actions.validate;

export default function(state = {}, action) {
	let newState = {}
	switch(action.type) {
		case actions.VALIDATE_LOADING:
			newState = {
				...state, 
				loading: true,
				complete: false,
				error: false
			}
			break;
		case actions.VALIDATE_COMPLETE:
			newState = {
				...state, 
				loading: false,
				complete: true,
				error: false
			}
			break;
		case actions.VALIDATE_ERROR:
			newState = {
				...state, 
				loading: false,
				complete: false, 
				error:true,
				errorMessage: action.payload
			}
			break;
		default:
			newState = state;
			break;
	}
	return newState;
}