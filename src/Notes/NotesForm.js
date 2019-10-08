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
        // const noteRows = this.props.noteItem.map((noted, indexPoint) => {
        //     return(
            
        //         <tr key={indexPoint} className="notesList">
        //         <td>{noted}</td>
        //         <td><button onClick={() => this.props.deleteNote(noted.notes_id)}><Icon type="delete" /></button></td>
        //         </tr>
        //     )
        // })
        return(
            <ul className="notesList">
            {
              this.props.sticky.map((noted, index) =>
               <li key={index}>{noted}</li>)
            
              }
       
          </ul>
//         <table>
//         <tbody>
//             <th>My Message</th>
//             {noteRows}
//         </tbody>
   
//   </table>
    
        )
    }
}

export default NotesForm;