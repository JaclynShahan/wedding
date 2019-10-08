import React, { Component } from 'react';
import { Icon } from 'antd';
import './Notes.css';

import NotesForm from './NotesForm.js';
import Axios from 'axios';


class Notes extends Component {
    constructor(props) {
        super(props);
        this.state = {
          term: '',
          sticky: []
        };
      }
    // componentDidMount = () => {
    //   Axios.get(`/api/getNote`).then(resp => {
    //     console.log(resp)
    //     this.setState({sticky: resp.data})
    //   })
    // }
    deleteNote = id => {
      Axios.delete(`/api/deleteNote/${id}`).then(resp => {
        console.log(resp)
        this.setState({sticky: resp.data})
      })
    }
   updateTerm (term) {
     this.setState({term})
   }
    addNote = e => {
      e.preventDefault()
      Axios.post(`/api/createNote`, {
          term: this.state.term,
          sticky: this.state.sticky
    }).then(resp => {
      this.onClear()
      console.log(resp)
      this.setState({sticky: resp.data})
    })
  }
  onClear = () => {
    this.setState({
      term: ""
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
        const {term} = this.state
        return (
          <div>
            <form onSubmit={this.addNote}>
              <input 
              className="inputLine"
              placeholder="Things to Do"
              value={term} 
              onChange={e => this.updateTerm(e.target.value)} />
              <button className="submitButton">Submit</button>
            </form>
            <NotesForm 
            sticky={this.state.sticky} />
          </div>
        );
      }
    }

export default Notes;