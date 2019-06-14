import React, { Component } from 'react';
import { Divider } from 'antd';

class WeddingChecklist extends Component {
    constructor() {
        super()
        this.state = {
            checklistItem: '',
            cost: '',
            notes: ''
        }
    }
    addItems = (e) => {
        e.preventDefault()
        this.setState({
            checklistItem: this.state.checklistItem,
            cost: this.state.cost,
            notes: this.state.notes
        })
    }

    onClear = () => {
        this.setState({
            checklistItem: '',
            cost: '',
            notes: ''
        })
    }
    textChangeHandler = (e, stateProperty) => {
        this.setState({ [stateProperty]: e.target.value })
      }

    render() {
        return(
            <div>
            <form>
            <input
            value={this.state.checklistItem}
            onChange={e => this.textChangeHandler(e, 'checklistItem')}
            placeholder="Checklist Item"
            />
            <input
            value={this.state.cost}
            onChange={e => this.textChangeHandler(e, 'cost')}
            placeholder="Cost"
            />
            <input
            value={this.state.notes}
            onChange={e => this.textChangeHandler(e, 'notes')}
            placeholder="Notes"
            />
            <button type="submit">Submit</button>
            </form>
            <Divider />
            </div>
        )
    }
}

export default WeddingChecklist;