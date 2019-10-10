import React, { Component } from 'react';
import './Notes.css';
import { Icon } from 'antd';

class NotesForm extends Component {
    constructor() {
        super() 
        this.state = {
        
        }
    }
   
    render() {


            const noteRows = this.props.stickyNote.map((noted, indexPoint) => {
                return (
                    
                        <div key={indexPoint} className="notesList">
                            <form>
                                {noted}
                            </form>
                        </div>
                    
                )
            })
   
          

    
        

        return (
            
                    {noteRows}
                
            
        )
    }
    } 


export default NotesForm;