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
                <form className="formFit" onSubmit={e => this.pendingNote(e)}>
           <input 
                className="inputField"
                onChange={e => this.updateNote(e.target.value)}
                value={this.state.note}
                type="text"
                placeholder="What I Need To Do..."
                />
            <Icon onClick={e => this.pendingNote(e)}className="addIcon" type="plus"/>
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