import {SET_LYRICS} from '../constants'

export const setLyrics = (str) => {
    return {
        type : SET_LYRICS,
        lyrics : str
    }
}


