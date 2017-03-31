import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/root-reducer';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const loggingMiddleware = applyMiddleware(createLogger(), thunkMiddleware);

let store = createStore(rootReducer, loggingMiddleware);

export default store;
