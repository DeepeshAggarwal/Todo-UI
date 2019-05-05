import { constants } from '../../common/constants';

const actions = constants.actions.validate;

export default function(state = {}, action) {
	let newState = {}
	switch(action.type) {
		case action.VALIDATE_LOADING:
			newState = {
				...state, 
				loading: true,
				complete: false,
				error: false
			}
		case action.VALIDATE_COMPLETE:
			newState = {
				...state, 
				loading: false,
				complete: true,
				error: false
			}
		case action.VALIDATE_ERROR:
			newState = {
				...state, 
				loading: false,
				complete: false, 
				error:true
			}
	}
	return newState;
}