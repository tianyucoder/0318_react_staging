import React, {Component} from 'react'
import './Item.css'

export default class Item extends Component {
  render() {
    let {userName,content} = this.props
    return (
      <li className="list-group-item">
        <div className="handle">
          <a href="#2">删除</a>
        </div>
        <p className="user"><span>{userName}</span><span>说:</span></p>
        <p className="centence">{content}</p>
      </li>

    )
  }
}