import React from 'react';
import './Playlist.css';
import { Tracklist } from '../TrackList/TrackList';


export class Playlist extends React.Component {
    constructor(props) {
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
    }
    handleNameChange({target}) {
        this.props.onNameChange(target.value)
    }

    render() {
        return (
        <div className="Playlist">
            <input defaultValue={'New Playlist'} onChange={this.handleNameChange} />
            <Tracklist tracks={this.props.playlistTracks} onRemove={this.props.onRemove} isRemoval={true} />
            <button className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
        </div>
        )};
}
