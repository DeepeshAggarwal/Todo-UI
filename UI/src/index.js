import { Provider } from 'react-redux';
import App from './App';
import Test from './Test';
import ReactDOM from 'react-dom';
import React from 'react';
// import { Router, Route, hashHistory } from 'react-router';
import { HashRouter as Router, Route } from 'react-router-dom';
import store from './app/store/index.js';
import './App.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<div>
				<Route exact path="/" component={App} />
				{/* <Route path="/" component={Drawer} /> */}
				{/* <Route path="login" component={App} /> */}
				<Route path="/test" component={Test} />
				<Route path="app" component={App} />
			</div>
		</Router>
	</Provider>,
	document.getElementById('root')
);

// import { applyMiddleware, createStore } from 'redux';
// import { promiseMiddleware } from './middleware';
