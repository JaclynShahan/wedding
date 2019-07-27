import React, { Component } from 'react';
import { Icon } from 'antd';
import './Notes.css';
import Axios from 'axios';

class Notes extends Component {
    constructor() {
        super() 
        this.state = {
            note: "",
            notesArr: []
        }
    }

    componentDidMount = () => {
        Axios.get(`/api/getNote`).then(resp => {
          console.log(resp) 
          this.setState({notesArr: resp.data}) 
        })
    }

    pendingNote = e => {
        e.preventDefault()
        Axios.post(`/api/postNote`, {
           note: this.state.note 
        }).then(resp => {
           this.onClear()
           console.log(resp)
           this.setState({notesArr: resp.data}) 
        })
    }

    onClear = () => {
        this.setState({
            note: ''
        })
    }

    updateNote = (note) => {
        this.setState({note})
    }
    render() {
        return(
            <div>
                <form>
           <input 
                value={this.state.pendingNote}
                type="text"
                placeholder="What I Need To Do..."
                />
             <button type="submit"><Icon className="addIcon" type="plus"/></button>
              </form>
                <div className="noteForm">
                {this.state.pendingNote}
                </div>

            </div>
        )
    }
}

export default Notes;