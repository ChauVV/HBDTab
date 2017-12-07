import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class LanguageScreen extends Component {
    render() {
        const { name } = this.props.match.params
        console.log('LanguageScreen', this.props.history)
        return(
            <div>
                <h1>HEY {name}</h1>
                <h2>{this.props.counter}</h2>
                <Link to="/">to Home</Link>
                <Link to="/mainTabbar">to MainTabbar</Link>
            </div>
        )
    }
}