import React from 'react'

export default class EthereumScreen extends React.Component {
  constructor(props) {
    super(props)
    console.log('EthereumScreen constructor')
  }
  componentWillMount() {
    console.log('EthereumScreen componentWillMount')
  }
  render() {
    console.log('EthereumScreen render')
    return (
      <div>EthereumScreen</div>
    )
  }
  componentDidMount() {
    console.log('EthereumScreen componentDidMount')
  }
}