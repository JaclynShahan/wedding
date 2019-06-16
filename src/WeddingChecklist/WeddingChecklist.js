import React, { Component } from 'react';
import { Divider } from 'antd';
import ChecklistTable from './ChecklistTable.js';
import './WeddingChecklist.css';
import Axios from 'axios';

class WeddingChecklist extends Component {
    constructor() {
        super()
        this.state = {
            checklistItem: '',
            cost: '',
            notes: '',
           items: []
        }
        this.addListItems = this.addListItems.bind(this)
    }
     componentDidMount = () => {
         Axios.get(`/api/getItems`).then(resp => {
           console.log(resp)
         this.setState({ items: resp.data })
        })
      }
      onDelete = i => {
        Axios.delete(`/api/deleteItems/${i}`).then(resp => {
          console.log(resp)
          this.setState({ items: resp.data })
        })
      }

      addListItems = e => {
        e.preventDefault()
        Axios.post('/api/addItems', {
          item: {
           checklistItem: this.state.checklistItem,
           cost: this.state.cost,
           notes: this.state.notes
          }
        }).then(resp => {
          this.onClear()
          console.log(resp)
          this.setState({ items: resp.data })
        })
      }
    onClear = () => {
        this.setState({
            checklistItem: '',
            cost: '',
            notes: ''
        })
    }
    updateChecklistItem (checklistItem) {
      this.setState({ checklistItem })
    }
    updateCost (cost) {
      this.setState({cost})
    }
    updateNotes (notes) {
      this.setState({notes})
    }
 

    render() {
        console.log(this.props)
        console.log(this.state)
        const { checklistItem, cost, notes } = this.state
        return(
            <div>
            <form>
            <input
            className="inputStyle"
            value={checklistItem}
            onChange={e => this.updateChecklistItem(e.target.value)}
            placeholder="Checklist Item"
            />
            <input
            className="inputStyle"
            value={cost}
            onChange={e => this.updateCost(e.target.value)}
            placeholder="Cost"
            />
            <input
            className="inputStyle"
            value={notes}
            onChange={e => this.updateNotes(e.target.value)}
            placeholder="Notes"
            />
            <button onClick={e => this.addListItems(e)} className="submit" type="submit">Submit</button>
          
            <Divider />
            <ChecklistTable
            onDelete={this.onDelete} 
            list={this.state.items}
            />
            </form>
            </div>
        )
    }
}

export default WeddingChecklist;