import React, { Component } from 'react';
import './Notes.css';

class NotesForm extends Component {
    constructor() {
        super() 
        this.state = {

        }
    }

    render() {
        const showNotes = this.props.newNote.map((pendNote, indexPoint) => {
            return(
              <form key={indexPoint}>
              
                <span>{pendNote.note}</span>
                
              </form>
            )
        })
        return(
            <div>
                <form className="noteform">
                {showNotes}
                </form>
              
            </div>
        )
    }
}

export default NotesForm;