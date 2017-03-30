
import {SET_LYRICS} from '../constants'

const initialState = {text : ''};

const reducer = (prevState = initialState, action) => {

    switch(action.type) {
        case 'SET_LYRICS':
            return Object.assign({}, prevState, {text: action.lyrics});
        default:
            return prevState;
    }

    return newState
}

export default reducer;
