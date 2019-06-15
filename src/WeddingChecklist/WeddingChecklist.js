import React, { Component } from 'react';
import { Divider } from 'antd';
import ChecklistTable from './ChecklistTable.js';
import './WeddingChecklist.css';
import axios from 'axios';

class WeddingChecklist extends Component {
    constructor() {
        super()
        this.state = {
            checklistItem: '',
            cost: '',
            notes: '',
           listArr: []
        }
    }
    componentDidMount = () => {
        axios.get(`/api/getItem`).then(resp => {
          console.log(resp)
          this.setState({ listArr: resp.data })
        })
      }

    addItems = e => {
        e.preventDefault()
    this.setState({
        checklistItem: '',
         cost: '',
         notes: '',
         listArr: [...this.state.listArr, this.state.checklistItem, this.state.cost, this.state.notes]
    })
    //     axios.post('/api/createItem', {
           
    //         checklistItem: this.state.checklistItem,
    //         cost: this.state.cost,
    //         notes: this.state.notes,
    //        // listArr: this.state.listArr
          
    //     }).then(resp => {
    //       this.onClear()
    //       console.log(resp)
    //       this.setState({ listArr: resp.data })
    //     })
    //   }
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
        console.log(this.props)
        console.log(this.state)
        return(
            <div>
            <form onSubmit={e => this.addItems(e)}>
            <input
            className="inputStyle"
            value={this.state.checklistItem}
            onChange={e => this.textChangeHandler(e, 'checklistItem')}
            placeholder="Checklist Item"
            />
            <input
            className="inputStyle"
            value={this.state.cost}
            onChange={e => this.textChangeHandler(e, 'cost')}
            placeholder="Cost"
            />
            <input
            className="inputStyle"
            value={this.state.notes}
            onChange={e => this.textChangeHandler(e, 'notes')}
            placeholder="Notes"
            />
            <button className="submit" type="submit">Submit</button>
            </form>
            <Divider />
            <ChecklistTable 
            listArr={this.state.listArr}
            />
            </div>
        )
    }
}

export default WeddingChecklist;