import { createStore, applyMiddleware, combineReducers } from 'redux';

import promiseMiddleware from 'redux-promise-middleware';
import getNote from './reducers/getNote';

export default createStore (
    combineReducers ({
        getNote
    }),
    applyMiddleware(promiseMiddleware)
)