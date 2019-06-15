import React from 'react';
import { Route, Switch } from 'react-router-dom';
import WeddingChecklist from './WeddingChecklist/WeddingChecklist.js';
import SongList from './SongList/SongList.js';
import GuestList from './GuestList/GuestList.js';
import DIYIdeas from './DIYIdeas/DIYIdeas.js';

export default (
   
    <Switch>
        
<Route exact path='/' component={WeddingChecklist} />
<Route path='/Song List' component={SongList} />
<Route path='/Guest List' component={GuestList} />
<Route path='DIY Ideas' component={DIYIdeas} />

    </Switch>
   
)