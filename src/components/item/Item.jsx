import React, {Component} from 'react'
import './Item.css'

export default class Item extends Component {
  render() {
    return (
      <li className="list-group-item">
        <div className="handle">
          <a href="#2">删除</a>
        </div>
        <p className="user"><span>xxx</span><span>说:</span></p>
        <p className="centence">React不错!</p>
      </li>
    )
  }
}