import Lyrics from '../components/Lyrics'
import React from 'react'
import store from '../store'
import {setLyrics, fetchLyrics} from '../action-creators/lyrics';


class LyricsContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = Object.assign({
            artistQuery: '',
            songQuery: '',
        }, store.getState());

        this.handleArtistInput = this.handleArtistInput.bind(this);
        this.handleSongInput = this.handleSongInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        store.dispatch(fetchLyrics(this.state.artistQuery, this.state.songQuery))
    }

    handleArtistInput(artist) {
        this.setState({
            artistQuery: artist
        })
    }

    handleSongInput(song){
        this.setState({
            songQuery: song
        })
    }

    componentDidMount () {
        this.unsubscribe = store.subscribe(() => {
            this.setState(store.getState());
        });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render(){

        const props = {
            setArtist: this.handleArtistInput,
            setSong: this.handleSongInput,
            handleSubmit: this.handleSubmit,
            text: this.state.text,
            artistQuery: this.state.artistQuery,
            songQuery: this.state.songQuery,
        };
        return (
            <Lyrics props={props}/>
        );
    }

}

export default LyricsContainer;
