import React, { Component } from 'react';
import {Checkbox, Icon} from 'antd';
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
        const tableRows = this.props.listArr.map((listArr, indexPoint) => {
            return (
            <tr key={indexPoint}>
           <td><button><Icon type="edit" /></button></td>
            <td>{listArr.checklistItem}</td>
            <td>{listArr.cost}</td>
            <td>{listArr.notes}</td>
          <td><Checkbox onChange={e => this.onChange(e)}></Checkbox></td>
            </tr>
            
            )}
        )
        return(
          <table className="tableStyle">
              <tbody>
                  <tr>
                      <th className="row1">Edit</th>
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