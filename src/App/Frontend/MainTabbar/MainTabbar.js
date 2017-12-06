import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Switch, Route } from 'react-router'

const MainTabbar = () => {
  return (
    <nav className="nav-group">
      <h5 className="nav-group-title">Navigation</h5>
      <Tab path="/ethereumView" label="Ethereum" icon="home" />
      <Tab path="/tokensView" label="Tokens" icon="chart-bar" />
      <Tab path="/exchangesView" label="Exchanges" icon="chart-bar" />
      <Tab path="/settingsViwe" label="Settings" icon="chart-bar" />
    </nav>
  );
}

const Tab = (props) => {
  return (
    <NavLink to={props.path} className="nav-group-item" activeClassName="active" exact={true}>
      <span className={"icon icon-" + props.icon}></span>
      {props.label}
    </NavLink>
  )
}

const Master = () => {
  return (
    <Provider store={this.props.store}>
      <ConnectedRouter history={this.props.history}>
        <div className="window">
          <div className="window-content">
            <div className="pane-group">
              <div className="pane-sm sidebar"><MainTabbar/></div>
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
      <Route exact path="/ethereumView" component={SplashScreen} />
      <Route path="/languageScreen/:name" component={LanguageScreen} />
    </Switch>
  );
}

export default Master;
