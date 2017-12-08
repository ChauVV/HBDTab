import React from 'react'

export default class ExchangesScreen extends React.Component {
  constructor (props) {
    super(props)
    console.log('ExchangesScreen constructor')
  }
  componentWillMount () {
    console.log('ExchangesScreen componentWillMount')
  }
  render () {
    console.log('ExchangesScreen render')
    return (
      <div>ExchangesScreen</div>
    )
  }
  componentDidMount () {
    console.log('ExchangesScreen componentDidMount')
  }
}
