import React, { Component } from 'react';
import { Icon } from 'antd';
import './Notes.css';

class Notes extends Component {
    constructor() {
        super() 
        this.state = {

        }
    }

    render() {
        return(
            <div>
                <form className="noteForm">
                    <Icon className="addIcon" type="plus"/>
                    <h1>Things To Do</h1>
                    <p>Make Notes in here so I know what I am doing.</p>
                </form>

            </div>
        )
    }
}

export default Notes;