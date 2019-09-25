import React, { Component } from 'react';
import { Icon } from 'antd';
import './Notes.css';
import Axios from 'axios';
import NotesForm from './NotesForm.js';
import ReactStickies from 'react-stickies';

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
    onChange = e => {
        this.setState({
            notesArr: e.target.value
        })
    }

    updateNote = (note) => {
        this.setState({note})
    }
    render() {
        
        return(
            <div>
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/draft-js/0.7.0/Draft.min.css"></link>
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
                <ReactStickies 
                notesArr={this.state.notesArr}
                onChange={this.onChange}
            
                />
              

            </div>
        )
    }
}

export default Notes;