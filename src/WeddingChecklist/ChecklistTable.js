import React, { Component } from 'react';

class ChecklistTable extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        const tableRows = this.props.item.map((listItem, indexPoint) => {
            return
            <tr key={indexPoint}>

            </tr>
        })
        return(
            <div>

            </div>
        )
    }
}

export default ChecklistTable;