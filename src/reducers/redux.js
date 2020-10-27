import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import MainReducer from './Main-reducer';

let reducers = combineReducers({
  mainPage: MainReducer,
 
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;