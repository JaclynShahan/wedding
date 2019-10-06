import React, {Component} from 'react';
import Axios from 'axios';
import GuestListTable from './GuestListTable.js';

class GuestList extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            address: '',
            email: '',
            guests: []

        }
    }
    componentDidMount = () => {
       Axios.get('/api/getGuest').then(resp => {
           console.log(resp)
           this.setState({guests: resp.data})
       })
    }
    addGuest = e => {
        e.preventDefault()
        Axios.post('/api/createGuest', {
            name: this.state.name,
            address: this.state.address,
            email: this.state.email,
        }).then(resp => {
            console.log(resp)
            this.setState({guests: resp.data})
        })
    }
    deleteGuest = id => {
        Axios.delete(`/api/deleteGuest/${id}`).then(resp => {
            console.log(resp)
            this.setState({guests: resp.data})
        })
    }
    clearAll = () => {
        this.setState({
            name: '',
            address: '',
            email: '',
            totalCount: ''
        })
    }
    updateName(name) {
        this.setState({name})
    }
    updateAddress(address) {
        this.setState({address})
    }
    updateEmail(email) {
        this.setState({email})
    }
  

    render() {
        console.log(this.props)
        console.log(this.state)
        const {name, address, email} = this.state;
        return(
            <div>
                <form onSubmit={(e) => this.addGuest(e)}>
                    <input 
                    className="inputRows"
                    placeholder="Name"
                    value={name}
                    onChange={e => this.updateName(e.target.value)}
                    />
                    <input 
                    className="inputRows"
                    placeholder="Address"
                    value={address}
                    onChange={e => this.updateAddress(e.target.value)}
                    />
                    <input 
                    className="inputRows"
                    placeholder="Email"
                    value={email}
                    onChange={e => this.updateEmail(e.target.value)}
                    />
                    <button className="submitType" type="submit">Submit</button>
                    </form>
                <GuestListTable 
                onDelete={this.deleteGuest}
                invites={this.state.guests}
                />
               

            </div>
        )
    }
}

export default GuestList;