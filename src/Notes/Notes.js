import React, { Component } from 'react';
import { Icon } from 'antd';
import './Notes.css';

import NotesForm from './NotesForm.js';
import Axios from 'axios';


class Notes extends Component {
    constructor() {
        super();
        this.state = {
          note: '',
          sticky: []
        };
      }
    componentDidMount = () => {
      Axios.get(`/api/getNote`).then(resp => {
        console.log("Getting Request", resp)
        this.setState({sticky: resp.data})
      })
    }
    deleteNote = id => {
      Axios.delete(`/api/deleteNote/${id}`).then(resp => {
        console.log(resp)
        this.setState({sticky: resp.data})
      })
    }
   updateNote (note) {
     this.setState({note})
   }
    addNote = e => {
      e.preventDefault()
      Axios.post(`/api/createNote`, {
          note: this.state.note,
    }).then(resp => {
      this.onClear()
      console.log(resp)
      this.setState({sticky: resp.data})
    })
  }
  onClear = () => {
    this.setState({
      note: ""
    })
  }
      // onSubmit = (event) => {
      //   event.preventDefault();
      //   this.setState({
      //     note: '',
      //     notes: [...this.state.notes, this.state.note]
      //   });
      // }
   
    
      render() {
        const {note} = this.state
        return (
          <div>
            <form onSubmit={this.addNote}>
              <input 
              className="inputLine"
              placeholder="Things to Do"
              value={note} 
              onChange={e => this.updateNote(e.target.value)} />
              <button className="submitButton">Submit</button>
            </form>
          
            <NotesForm 
            stickyNote={this.state.sticky} 
            deleteNote={this.deleteNote}
            />
            
          </div>
        );
      }
    }

export default Notes;