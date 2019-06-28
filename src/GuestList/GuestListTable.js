import React, { Component } from 'react';
import './GuestList.css';
import {InputNumber, Icon} from 'antd';


class GuestListTable extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    onChange = (value) => {
        console.log('changed', value);
      }

    render() {
        const guestRows = this.props.invites.map((guest, indexPoint) => {
           return(
            <tr key={indexPoint}>
        <td className="sideRowsOne"><button onClick={() => this.props.deleteGuest(guest.id)}><Icon type='delete'/></button></td>
            <td>{guest.name}</td>
            <td>{guest.address}</td>
            <td>{guest.email}</td>
            <td className="sideRowsTwo"><InputNumber min={1} max={10} defaultValue={1} onChange={this.onChange} /></td>
            </tr>
           )
        })
    
           return (
                <table className="guestTable">

                <tbody>
                    <tr>
                        <th className="sideRowsOne">Delete</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Email</th>
                        <th className="sideRowsTwo">Additional People</th>
                    </tr>
                </tbody>
                {guestRows}
            </table>
        )
    }
}

export default GuestListTable;