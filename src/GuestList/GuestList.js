import React, {Component} from 'react';
import Axios from 'axios';
import { InputNumber } from 'antd';

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
    onChange = (value) => {
        console.log('changed', value);
      }

    render() {
        console.log(this.props)
        console.log(this.state)
        const {name, address, email} = this.state;
        return(
            <div>
                <form>
                    <input 
                    placeholder="Name"
                    value={name}
                    onChange={e => this.updateName(e.target.value)}
                    />
                    <input 
                    placeholder="Address"
                    value={address}
                    onChange={e => this.updateAddress(e.target.value)}
                    />
                    <input 
                    placeholder="Email"
                    value={email}
                    onChange={e => this.updateEmail(e.target.value)}
                    />
                    <InputNumber min={1} max={10} defaultValue={1} onChange={this.onChange} />

                </form>

            </div>
        )
    }
}

export default GuestList;