import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './components/Login';
import './index.css';
import { BrowserRouter as Router, Route, hashHistory } from 'react-router-dom'

ReactDOM.render(
  (<Router history={hashHistory}>
      <div>
        <Route path="/index" component={Login}/>
        <Route path="/home" component={App}/>
      </div>
  </Router>),
  document.getElementById('root')
);
