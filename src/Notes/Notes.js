import React, { Component } from 'react';
import { Icon } from 'antd';
import './Notes.css';
import Axios from 'axios';
import NotesForm from './NotesForm.js';
import { connect } from 'react-redux';

class Notes extends Component {
    constructor() {
        super() 
        this.state = {
            note: "",
            
        }
    }

  

    pendingNote = e => {
        e.preventDefault()
        Axios.post(`/api/createNote`, {
           note: this.state.note 
        }).then(resp => {
            this.props.postNote(resp.data)
           //this.onClear()
           //console.log(resp)
          // this.setState({notesArr: resp.data}) 
        })
        this.onClear()
    }

    onClear = () => {
        this.setState({
            note: ''
        })
    }
  

    updateNote = (note) => {
        this.setState({note})
    }
    render() {
        const {note} = this.state;
        return(
            <div>
                <form className="formFit" onSubmit={e => this.pendingNote(e)}>
           <input 
                className="inputField"
                onChange={e => this.updateNote(e.target.value)}
                value={note}
                type="text"
                placeholder="What I Need To Do..."
                />
            <Icon onClick={e => this.pendingNote(e)}className="addIcon" type="plus"/>
              </form>
             
              <NotesForm 

              onChange={this.onChange}
              />

            </div>
        )
    }
}

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => ({
    postNote(newNote) {
        dispatch({
            type: 'ADD_NOTE',
            payload: newNote
        })
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Notes)