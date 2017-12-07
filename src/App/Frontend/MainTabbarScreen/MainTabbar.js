import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Switch, Route, Router } from 'react-router'
import { Button } from 'react-bootstrap'

import EthereumScreen from './EthereumScreen/EthereumScreen'
import ExchangesScreen from './ExchangesScreen/ExchangesScreen'
import SettingsScreen from './SettingsScreen/SettingsScreen'
import TokensScreen from './TokensScreen/TokensScreen'

const Tab = (props) => {
  return (
    <NavLink to={props.path} className="nav-group-item ">
      <span className={"icon icon-" + props.icon}></span>
      {props.label}
    </NavLink>
  )
}

const Tabs = () => {
  return (
    <nav className="nav-group">
      <h5 className="nav-group-title">Navigation</h5>
      <Tab path="/mainTabbar/ethereumView" label="Ethereum" icon="home"/>
      <Tab path="/mainTabbar/tokensView" label="Tokens" icon="chart-bar" />
      <Tab path="/mainTabbar/exchangesView" label="Exchanges" icon="chart-bar" />
      <Tab path="/mainTabbar/settingsView" label="Settings" icon="chart-bar" />
      <Button className="btn btn-primary">Next</Button>
      <Button>Back</Button>
    </nav>
  );
}

class MainTabbar extends React.Component {
  render() {
    console.log('render MainTabbar')
    console.log(this.props.history)
    return (
      <div className="window">
        <div className="window-content">
          <div className="pane-group">
            <div className="pane-sm sidebar"><Tabs/></div>
            <div className="pane padded"><AppRouter/></div>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.props.history.push({ pathname: '/mainTabbar/ethereumView' })
  }
}

const AppRouter = () => {
  return (
        <Switch>
          <Route path="/mainTabbar/ethereumView" component={EthereumScreen} />
          <Route path="/mainTabbar/settingsView" component={SettingsScreen} />
          <Route path="/mainTabbar/exchangesView" component={ExchangesScreen} />
          <Route path="/mainTabbar/tokensView" component={TokensScreen} />
        </Switch>
  );
}

export default MainTabbar;
