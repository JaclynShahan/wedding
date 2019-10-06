import React, { Component } from 'react';
import { Icon } from 'antd';
import './Notes.css';

import NotesForm from './NotesForm.js';


class Notes extends Component {
    constructor(props) {
        super(props);
        this.state = {
          term: '',
          items: []
        };
      }
    
      onChange = (event) => {
        this.setState({ term: event.target.value });
      }
    
      onSubmit = (event) => {
        event.preventDefault();
        this.setState({
          term: '',
          items: [...this.state.items, this.state.term]
        });
      }
      // removeNote = (noteIndex) => {
      //   term.splice(noteIndex, 1);
      //   this.setState({
      //     term: term
      //   })
      // }

    handleDelete (event) {
      
    }
    
      render() {
        return (
          <div>
            <form onSubmit={this.onSubmit}>
              <input className="inputLine"value={this.state.term} onChange={this.onChange} />
              <button className="submitButton">Submit</button>
            </form>
            <NotesForm 
          //  removeNote={this.removeNote}
            items={this.state.items} />
          </div>
        );
      }
    }

export default Notes;