import axios from 'axios';

import {SET_LYRICS} from '../constants'

export const setLyrics = (str) => {
    return {
        type : SET_LYRICS,
        lyrics : str
    }
};

export const fetchLyrics = (artist, song) => {
    return function (dispatch, getState) {
      axios.get(`/api/lyrics/${artist}/${song}`)
        .then( (res) => {
            dispatch(setLyrics(res.data.lyric));
            return res.data
          }
        );
    }
};


