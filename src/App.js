import React, { Component } from 'react';
import router from './router';
import {Link} from 'react-router-dom';
import WeddingChecklist from './WeddingChecklist/WeddingChecklist.js';

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
 

  render() {
    return (
      <div>
     
    <div className="routeBar">
      <Link to='/'>Wedding Checklist</Link>
      <Link to='/SongList'>Song List</Link>
      <Link to='/GuestList'>Guest List</Link>
      <Link to='/DIYIdeas'>DIY Ideas</Link>
    
    </div>
    {router}
    </div>
  );
  }
}

export default App;
