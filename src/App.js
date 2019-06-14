import React, { Component } from 'react';
import { Checkbox } from 'antd';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  onChange = e => {
    console.log(`checked = ${e.target.checked}`);
  }

  render() {
    return (
    <div>
   
    
    </div>
  );
  }
}

export default App;
