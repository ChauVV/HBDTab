import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.css'

export default class SplashScreen extends Component {
    constructor(props) {
        super(props)
        this.state=({
            name:'Tuan',
            li: 'li'
        })
    }
    render() {
        const { counter } = this.props
        const { name, li } = this.state

        return(
            <div className = {styles.container}>
                <h1 >SplashScreen</h1>
                <h2 >{counter}</h2>
                <button className={styles.btn} onClick={() => this.props.tang(this)}>Tang</button>
                <Link to={`/languageScreen/${ name }`} >to LanguageScreen</Link>
            </div>
        )
    }
}
