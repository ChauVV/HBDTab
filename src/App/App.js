// @flow
import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { store, history } from './Backend/Redux/configureStore'
import { checkLocalStoreToRedux } from './Backend/Redux/reducerConfig'
import { Switch, Route } from 'react-router'

import SplashScreen from '~/initsScreen/SplashScreen'
import LanguageScreen from '~/initsScreen/LanguageScreen'
import NewWalletScreen from '~/initsScreen/NewWalletScreen'
import RestoreScreen from '~/initsScreen/RestoreScreen'
import MainTabbar from '~/MainTabbarScreen'

import * as actions from './Backend/Redux/actions/globleActions'
import { KEYSTORE } from './Utils/globalConstants'
import '../vendor/photon/css/globalStyles.css'

const App = () => {
  checkLocalStoreToRedux(store, KEYSTORE.COUNTER, actions.setCounter, 0)
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div><AppRouter/></div>
      </ConnectedRouter>
    </Provider>
  )
}

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={SplashScreen}/>
      <Route path="/languageScreen" component={LanguageScreen}/>
      <Route path="/newWalletScreen" component={NewWalletScreen}/>
      <Route path="/restoreScreen" component={RestoreScreen}/>
      <Route path="/mainTabbar" component={MainTabbar}/>
    </Switch>
  )
}

export default App
