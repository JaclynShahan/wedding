import React, { Component } from 'react';
import {Icon} from 'antd';
import './SongList.css';



class SongListTable extends Component {
    constructor() {
        super()
        this.state = {

        }

    }
  

    render() {
        const songRows = this.props.titles.map((song, indexPoint) => {
            return(
                <tr key={indexPoint}>
                <td><button onClick={() => this.props.onSongDelete(song.song_id)}><Icon type="delete"/></button></td>
                <td>{song.artist}</td>
                <td>{song.title}</td>
                </tr>
            )
        })
        return(
            <table className="songTable">
                <tbody>
                    <tr>
                        <th className="deleteRow">Delete</th>
                        <th>Artist</th>
                        <th>Title</th>
                    </tr>
                    {songRows}
                </tbody>
            </table>

        )
    }
}

export default SongListTable;