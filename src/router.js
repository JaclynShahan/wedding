import React from 'react';
import { Route, Switch } from 'react-router-dom';
import WeddingChecklist from './WeddingChecklist/WeddingChecklist.js';
import SongList from './SongList/SongList.js';
import GuestList from './GuestList/GuestList.js';
import DIYIdeas from './DIYIdeas/DIYIdeas.js';
import Notes from './Notes/Notes.js';
import { Provider } from 'react-redux';
import store from './store';

export default (
  <Provider store={store}>
    <Switch>
        
<Route exact path='/' component={WeddingChecklist} />
<Route path='/SongList' component={SongList} />
<Route path='/GuestList' component={GuestList} />
<Route path='/DIYIdeas' component={DIYIdeas} />
<Route path='/Notes' component={Notes} />
    </Switch>
  </Provider> 
)