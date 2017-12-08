import React, { Component } from 'react'
import './styles.css'

export default class SplashScreen extends Component {
  render () {
    return (
      <div className="window">
        <div className="window-content">
          <img className="img-Background"
            src={require('*/images/buttons/imgSplashScreen.png')} />
        </div>
      </div>
    )
  }
  componentDidMount () {
    setTimeout(() => {
      this.props.history.push('/languageScreen')
    }, 3000)
  }
}
