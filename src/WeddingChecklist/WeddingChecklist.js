import React, { Component } from 'react';
import ChecklistTable from './ChecklistTable.js';
import './WeddingChecklist.css';
import Axios from 'axios';

class WeddingChecklist extends Component {
    constructor() {
        super()
        this.state = {
            checklist_item: '',
            cost: '',
            notes: '',
           items: []
        }
        this.addListItems = this.addListItems.bind(this)
    }
     componentDidMount = () => {
         Axios.get(`/api/getItem`).then(resp => {
           console.log(resp)
         this.setState({ items: resp.data })
        })
      }
   
      onDelete = i => {
        Axios.delete(`/api/deleteItem/${i}`).then(resp => {
          console.log(resp)
          this.setState({ items: resp.data })
        })
      }
      addListItems = e => {
        e.preventDefault()
        Axios.post('/api/createItem', {
        
           checklist_item: this.state.checklist_item,
           cost: this.state.cost,
           notes: this.state.notes
          
        }).then(resp => {
          this.onClear()
          console.log(resp)
          this.setState({ items: resp.data })
        })
      }
    onClear = () => {
        this.setState({
            checklist_item: '',
            cost: '',
            notes: ''
        })
    }
    updateChecklistItem (checklist_item) {
      this.setState({ checklist_item })
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
        const { checklist_item, cost, notes } = this.state
        return(
            <div>
            <form onSubmit={e => this.addListItems(e)}>
            <input
            className="inputStyle"
            value={checklist_item}
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
            <button className="submit" type="submit">Submit</button>
          
          
            <ChecklistTable
            onDelete={this.onDelete} 
            item={this.state.items}
          
            />
            </form>
            </div>
        )
    }
}

export default WeddingChecklist;