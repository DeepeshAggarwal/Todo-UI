import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './components/Login.js';
import './index.css';
import { BrowserRouter as Router, Route, hashHistory } from 'react-router-dom'

ReactDOM.render(
  (<Router history={hashHistory}>
        <Route path="/" component={Login}/>
  </Router>),
  document.getElementById('root')
);
