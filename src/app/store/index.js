import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from '../reducers/index';

const middlewares = [
	thunk
]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	RootReducer,
	composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
