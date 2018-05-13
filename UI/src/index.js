import { Provider } from 'react-redux';
import App from './App';
import ReactDOM from 'react-dom';
import React from 'react';
// import { Router, Route, hashHistory } from 'react-router';
import { HashRouter as Router, Route } from 'react-router-dom';
import store from './app/store/index.js';
import './App.css';

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Route path="/" component={App} />
			{/* <Route path="login" component={App} /> */}
		</Router>
	</Provider>,
	document.getElementById('root')
);

// import { applyMiddleware, createStore } from 'redux';
// import { promiseMiddleware } from './middleware';
