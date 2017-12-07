
// @flow
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../Redux/reducers';




import electron from 'electron';

import { createHashHistory, createBrowserHistory } from 'history';
import { combineReducers } from 'redux';
import { connectRouter,  } from 'connected-react-router';

// Start history
const history = createHashHistory()

// Merge middlewares
const router = routerMiddleware(history);

const middleWare = [thunkMiddleware]
middleWare.push(router)

if (process.env['NODE_ENV'] === 'development') {
  middleWare.push(logger)
}

const store = createStore(connectRouter(history)(rootReducer), applyMiddleware(...middleWare));

export { store, history };
