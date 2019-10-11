import React, { Component } from 'react';
import './Notes.css';
import { Icon } from 'antd';
import Notes from './Notes';

class NotesForm extends Component {
    constructor() {
        super() 
        this.state = {
        
        }
    }
   
    render() {


       // console.log(noted)
        console.log(this.props.stickyNote)
            const noteRows = this.props.stickyNote.map((noted, indexPoint) => {
                return (
                    
                        <div key={indexPoint}>
                            <form className="notesList">
                                <button className="button" onClick={() => this.props.deleteNote(noted.note_id)}>X</button>
                                 {noted.note}
                            </form>
                        </div>
                    
                )
            })
   
          

    
        

        return (
                <div >

                    {noteRows}

                </div>    
                    

            
        )
    }
    } 


export default NotesForm;