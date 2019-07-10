import React, {Component} from 'react'

export default class About extends Component {

  componentWillUnmount() {
    console.log('About -- componentWillUnmount')
  }

  componentDidMount() {
    console.log('About -- componentDidMount')
  }

  render() {
    return (
      <h3>我是About的内容</h3>
    )
  }
}