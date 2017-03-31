import React from 'react'

const Lyrics = (props) => {
    const {text, setArtist, artistQuery, setSong, songQuery, handleSubmit } = props.props;
    return (
        <div className="well" style={{marginTop: '20px'}}>
            <form className="form-horizontal" onSubmit={(evt) => {
                evt.preventDefault();
                handleSubmit();
            }}>
                <fieldset>
                <div className="form-group">
                    <label className="col-xs-2 control-label">Artist</label>
                    <div className="col-xs-10">
                    <input
                        className="form-control"
                        type="text"
                        onChange={ evt => setArtist(evt.target.value)}
                        value={artistQuery}
                    />
                    </div>
                </div>
                <div className="form-group">
                    <label className="col-xs-2 control-label">Song</label>
                    <div className="col-xs-10">
                    <input
                        className="form-control"
                        type="text"
                        onChange={evt => setSong(evt.target.value)}
                        value={songQuery}
                    />
                    </div>
                </div>
                <pre>{text || 'Search above!'} </pre>
                <button
                    type="submit"
                    className="btn btn-success">
                    Search
                </button>
                </fieldset>
            </form>
        </div>
    );
}

export default Lyrics;
