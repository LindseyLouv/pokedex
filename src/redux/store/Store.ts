import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

const middleware = [thunkMiddleware];

const store = createStore(
  combineReducers(rootReducer),
  applyMiddleware(...middleware)
);

export default store;
