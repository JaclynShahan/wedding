import React, { Component } from 'react';
import { Icon } from 'antd';
import './Notes.css';
import Axios from 'axios';
import NotesForm from './NotesForm.js';

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
        Axios.post(`/api/createNote`, {
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
    handleNoteChange = e => {
        this.setState({
            note: e.target.value
        })
    }

    updateNote = (note) => {
        this.setState({note})
    }
    render() {
        return(
            <div>
                <form onSubmit={e => this.pendingNote(e)}>
           <input 
                onChange={e => this.updateNote(e.target.value)}
                value={this.state.note}
                type="text"
                placeholder="What I Need To Do..."
                />
             <button type="submit"><Icon className="addIcon" type="plus"/></button>
              </form>
                <div className="noteForm">
                <NotesForm 
                newNote={this.state.notesArr}
                />
                </div>

            </div>
        )
    }
}

export default Notes;