import React, { Component } from 'react';

class WeddingChecklist extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return(
            <div>
            <input
            placeholder="Checklist Item"
            />
            <input
            placeholder="Cost"
            />
            <input
            placeholder="Notes"
            />
            <button type="submit">Submit</button>
            </div>
        )
    }
}

export default WeddingChecklist;