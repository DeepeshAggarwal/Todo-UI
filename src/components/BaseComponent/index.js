import React from 'react';
// import { Redirect } from 'react-router-dom'

const publicPaths = ['/', '/signin', '/signup', '/test', '/validate']

const checkAuth = (props) => {
	console.log(props);
	const xAuthToken = localStorage.getItem('x-auth-token') // TODO move to constants
	if(!xAuthToken) {
		const currentPath = window.location.pathname;
		if(!publicPaths.includes(currentPath)) {
			props.history.push('/');
		}
	} else {
		// TOOD change this to validation api to check if token is expired or not
		props.validateToken(xAuthToken);
	}
}

class BaseComponent extends React.Component {
	constructor(props) {
		super(props);
		checkAuth(props);
	}
}

export default BaseComponent;