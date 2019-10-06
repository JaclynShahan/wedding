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
    
      render() {
        return (
          <div>
            <form onSubmit={this.onSubmit}>
              <input value={this.state.term} onChange={this.onChange} />
              <button>Submit</button>
            </form>
            <NotesForm items={this.state.items} />
          </div>
        );
      }
    }

export default Notes;