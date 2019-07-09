import React, {Component} from 'react'
import Item from '../item/Item'

export default class List extends Component {
  render() {
    return (
      <div className="row">
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
      </div>
    )
  }
}