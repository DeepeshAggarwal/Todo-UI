import { constants } from '../../common/constants';

const actions = constants.actions.user;

export default function(state = {}, action) {
	let newState = {}
	switch(action.type) {
		case actions.UPDATE_ME:
			newState = {
				...state, 
				id: action.payload.id,
				email: action.payload.email,
				isLoggedIn: action.payload.validated
			}
			break;
		default:
			newState = state;
			break;
	}
	return newState;
}