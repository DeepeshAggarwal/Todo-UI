import { constants } from '../../common/constants';

const actions = constants.actions.signIn;

export default function(state = {}, action) {
	let newState = {};
	switch(action.type) {
		case actions.SIGN_IN_COMPLETE:
			newState = {
				...state, 
				loading: false,
				complete:true,
				error: false,
				body: action.payload
			}
			break;
		case actions.SIGN_IN_ERROR:
			newState = {
				...state, 
				loading: false,
				complete:false,
				error: true,
				errorMessage: action.payload
			}
			break;
		case actions.SIGN_IN_LOADING:
			newState = {
				...state, 
				loading: true
			}
			break;
		default:
			newState = state;
			break;
	}
	return newState;
}