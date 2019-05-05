import React from 'react';
// import { Redirect } from 'react-router-dom'

const publicPaths = ['/', '/signin', '/signup', '/test', '/validate']

const checkAuth = (props) => {
	const xAuthToken = localStorage.getItem('x-auth-token') // TODO move to constants
	if(!xAuthToken) {
		const currentPath = window.location.pathname;
		if(!publicPaths.includes(currentPath)) {
			props.history.push('/');
		}
	} else {
		// TOOD change this to validation api to check if token is expired or not
		// if expired redirect to login page(which as of now is home page with log in modal) 
		return true;
	}
}

class BaseComponent extends React.Component {
	constructor(props) {
		super(props);
		checkAuth(props);
	}
}

export default BaseComponent;