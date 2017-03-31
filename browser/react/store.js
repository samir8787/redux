import { createStore, applyMiddleware, combineReducers } from 'redux'
import lyricsReducer from './reducers/lyrics-reducer';
import playerReducer from './reducers/player-reducer';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const loggingMiddleware = applyMiddleware(createLogger(), thunkMiddleware);

let store = createStore(combineReducers({
    lyrics: lyricsReducer,
    player: playerReducer
}), loggingMiddleware);

export default store;
