import React from 'react'

export default class TokensScreen extends React.Component {
  constructor (props) {
    super(props)
    console.log('TokensScreen constructor')
  }
  componentWillMount () {
    console.log('TokensScreen componentWillMount')
  }
  render () {
    console.log('TokensScreen render')
    return (
      <div>TokensScreen</div>
    )
  }
  componentDidMount () {
    console.log('TokensScreen componentDidMount')
  }
}
