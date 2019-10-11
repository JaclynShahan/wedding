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
                    
                        <div key={indexPoint} className="notesList">
                            <form>
                                 {noted.note}
                            </form>
                        </div>
                    
                )
            })
   
          

    
        

        return (
                <div className="notesList">

                    {noteRows}
                    
                </div>    
                    

            
        )
    }
    } 


export default NotesForm;