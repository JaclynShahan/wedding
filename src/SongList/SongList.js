import React, { Component } from 'react';
import Axios from 'axios';
import './SongList.css';
import SongListTable from './SongListTable.js';


class SongList extends Component {
    constructor() {
        super()
        this.state = {
            artist: '',
            title: '',
            songs: []

        }
    }
    componentDidMount = () => {
        Axios.get(`/api/getSong`).then(resp => {
          console.log(resp)
        this.setState({ songs: resp.data })
       })
     }
     addSong = e => {
        e.preventDefault()
         Axios.post('/api/createSong', {
             artist: this.state.artist,
             title: this.state.title
         }).then(resp => {
             this.onClear()
             console.log(resp)
             this.setState({songs: resp.data})
         })
     }
     onClear = () => {
         this.setState({
             artist: '',
             title: ''
         })
     }
     updateArtist (artist) {
         this.setState ({artist})
     }
     updateTitle (title) {
         this.setState({title})
     }
     onSongDelete = i => {
        Axios.delete(`/api/deleteSong/${i}`).then(resp => {
            console.log(resp)
            this.setState({ songs: resp.data })
            
          })
     }
    
    render() {
        console.log(this.props)
        console.log(this.state)
        const {artist, title} = this.state;
        return(
            <div>
                <form onSubmit={e => this.addSong(e)}>
                    <input
                    className="styles"
                    value={artist}
                    placeholder="Artist"
                    onChange={e => this.updateArtist(e.target.value)}
                    />
                    <input
                    className="styles"
                    value={title}
                    placeholder="Song Title"
                    onChange={e => this.updateTitle(e.target.value)}
                    />
                    <button className="enterButton" onClick={e => this.addSong(e)}>Submit</button>

                    <SongListTable 
                    onSongDelete={this.onSongDelete}
                    titles={this.state.songs}
                    
                    />
                </form>
            </div>
            
        )
    }
}

export default SongList;