import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

const publicPaths = ['/', '/signin', '/signup', '/test']

const checkAuth = () => {
	const xAuthToken = localStorage.getItem('x-auth-token') // TODO move to constants
	if(!xAuthToken) {
		const currentPath = window.location.pathname;
		if(!publicPaths.includes(currentPath)) {
			window.location = "/";				
		}
	} else {
		// TOOD change this to validation api to check if token is expired or not
		// if expired redirect to login page(which as of now is home page with log in modal) 
		return true;
	}
}

class BaseComponent extends Component {
	constructor() {
		super();
		checkAuth();
	}
}

export default BaseComponent;