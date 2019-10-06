import React, { Component } from 'react';
import './Notes.css';


class NotesForm extends Component {
    constructor() {
        super() 
        this.state = {
        
        }
    }
   
    render() {

        return(
            <ul>
            {
              this.props.items.map((item, index) => <li key={index}>{item}</li>)
            }
          </ul>
    
        )
    }
}

export default NotesForm;