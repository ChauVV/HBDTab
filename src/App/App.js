// @flow
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { store, history } from './Backend/Redux/configureStore';
import { checkLocalStoreToRedux } from './Backend/Redux/reducerConfig'
import { Switch, Route } from 'react-router'

import SplashScreen from './Frontend/SplashScreen';
import LanguageScreen from './Frontend/LanguageScreen';

import * as actions from './Backend/Redux/actions/globleActions'
import { KEYSTORE } from './Utils/globalConstants'

const App = () => {
  checkLocalStoreToRedux(store, KEYSTORE.COUNTER, actions.setCounter, 0)
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div className="window">
          <div className="window-content">
            <div className="pane-group">
              <div className="pane-sm sidebar"></div>
              <div className="pane padded"><AppRouter /></div>
            </div>
          </div>
        </div>
      </ConnectedRouter>
    </Provider>
  );
}

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={SplashScreen} />
      <Route path="/languageScreen/:name" component={LanguageScreen} />
    </Switch>
  );
}

export default App;

