import React, { Component } from 'react';
import {Checkbox, Icon, Popconfirm} from 'antd';
import './WeddingChecklist.css';



class ChecklistTable extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
  
 onChange = e => {
    console.log(`checked = ${e.target.checked}`);
  }
    render() {
        const tableRows = this.props.item.map((listitem, indexPoint) => {
            return (
            <tr key={indexPoint}>
           <td><button onClick={() => this.props.onDelete(listitem.id)}><Icon type="delete" /></button></td>
            <td>{listitem.checklist_item}</td>
            <td>{listitem.cost}</td>
            <td>{listitem.notes}</td>
          <td><Checkbox onChange={e => this.onChange(e)}></Checkbox></td>
            </tr>
           
            )},
            console.log(this.props.item)
        )
        return(
          <table className="tableStyle">
              <tbody>
                  <tr>
                      <th className="row1">Delete</th>
                    <th className="row2">Wedding Item</th>
                    <th className="row3">Estimated Cost</th>
                    <th>Notes</th>
                    <th className="row5">Completed</th>
                  </tr>
                  {tableRows}
              </tbody>
          </table>
        )
    }
}

export default ChecklistTable;