import { Provider } from 'react-redux';
import App from './App';
import ReactDOM from 'react-dom';
import React from 'react';
// import { Router, Route, hashHistory } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './app/store/index.js';
import './App.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';


ReactDOM.render(
	<Provider store={store}>
		<Router>
			<div>
				<App />
			</div>
		</Router>
	</Provider>,
	document.getElementById('root')
);

// import { applyMiddleware, createStore } from 'redux';
// import { promiseMiddleware } from './middleware';
