import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {combineReducers} from 'redux';
import authReducer from './reducer/login';
import dashboard from './reducer/dashboard';

const rootReducer = combineReducers({
  auth: authReducer,
  dashboard: dashboard,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
