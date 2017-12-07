// @flow
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
// import { ConnectedRouter } from 'react-router-redux';
import { store, history } from './Backend/Redux/configureStore';
import { checkLocalStoreToRedux } from './Backend/Redux/reducerConfig'
import { Switch, Route } from 'react-router'

import SplashScreen from './Frontend/initsScreen/SplashScreen';
import LanguageScreen from './Frontend/initsScreen/LanguageScreen';
import MainTabbar from './Frontend/MainTabbarScreen'

import EthereumScreen from './Frontend/MainTabbarScreen/EthereumScreen/EthereumScreen'
import ExchangesScreen from './Frontend/MainTabbarScreen/ExchangesScreen/ExchangesScreen'
import SettingsScreen from './Frontend/MainTabbarScreen/SettingsScreen/SettingsScreen'
import TokensScreen from './Frontend/MainTabbarScreen/TokensScreen/TokensScreen'

import * as actions from './Backend/Redux/actions/globleActions'
import { KEYSTORE } from './Utils/globalConstants'

const App = () => {
  checkLocalStoreToRedux(store, KEYSTORE.COUNTER, actions.setCounter, 0)
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div><AppRouter/></div>
      </ConnectedRouter>
    </Provider>
  );
}

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={SplashScreen} />
      <Route path="/languageScreen/:name" component={LanguageScreen} />
      <Route path="/mainTabbar" component={MainTabbar}/>
    </Switch>
  );
}

export default App;

