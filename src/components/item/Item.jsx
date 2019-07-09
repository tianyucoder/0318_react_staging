import React, {Component} from 'react'
import './Item.css'

export default class Item extends Component {
  render() {
    return (
      <div className="card">
        <a href="https://github.com/reactjs" target="_blank" rel="noopener noreferrer">
          <img src="https://avatars.githubusercontent.com/u/6412038?v=3" style={{width: '100px'}} alt="资源加载失败"/>
        </a>
        <p className="card-text">reactjs</p>
      </div>
    )
  }
}