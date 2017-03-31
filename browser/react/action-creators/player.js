import {START_PLAYING, STOP_PLAYING, SET_CURRENT_SONG, SET_LIST, PLAY, PAUSE, LOAD, START_SONG, TOGGLE_ONE, TOGGLE} from '../constants'

import AUDIO from '../audio';

export const startPlaying = () => {
    return {
        type : START_PLAYING,
    }
};

export const stopPlaying = () => {
    return {
        type : STOP_PLAYING,
    }
};

export const setCurrentSong = (currentSong) => {
    return {
        type : SET_CURRENT_SONG,
        currentSong,

    }
};

export const setList = (currentSongList) => {
    return {
        type : SET_LIST,
        currentSongList
    }
};

export const play = () => {
    return function(dispatch) {
        AUDIO.play();
        dispatch(startPlaying());
    }
};

export const pause = () => {
    return function(dispatch) {
        AUDIO.pause();
        dispatch(stopPlaying());
    }
};

export const load = (currentSong, currentSongList) => {
    return function(dispatch) {
        AUDIO.src = currentSong.audioUrl;
        AUDIO.load();
        dispatch( setCurrentSong(currentSong));
        dispatch( setList(currentSongList));
    }
};
