const defaultState = {
  'currentFilter': {
    name: 'Inbox',
    start_date: new Date(new Date(null).toDateString()),
    end_date: new Date(new Date(new Date().setYear(2050)).toDateString()),
    isCompleted: false
  },
  'isLoggedIn': false
};

export default function(state = {}, action) {
	switch(action.type) {
		default:
			return {
				...state, 
				defaultState
			};
	}
}