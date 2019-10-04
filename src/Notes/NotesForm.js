import React, { Component } from 'react';
import './Notes.css';
import Axios from 'axios';
import Notes from './Notes';

class NotesForm extends Component {
    constructor() {
        super() 
        this.state = {
            notesArr: []
        }
    }
    componentDidMount = () => {
        Axios.get(`/api/getNote`).then(resp => {
          console.log(resp) 
          this.setState({notesArr: resp.data}) 
        })
    }
    makeNote (note)  {
        Axios.post(`/api/createNote`, {note}).then(results => {
            this.setState({notesArr: resp.data})
        })
    }
    onChange = e => {
        this.setState({
            notesArr: e.target.value
        })
    }
    render() {
        const {newNote: notesArr} = this.props.getNote
        // const showNotes = this.props.newNote.map((pendNote, indexPoint) => {
        //     return(
        //       <form key={indexPoint}>
              
        //         <span>{pendNote.note}</span>
                
        //       </form>
        //     )
        // })
        return(
            <div>
             <Notes createNoteFn={this.makeNote} />
              
            </div>
        )
    }
}

export default NotesForm;