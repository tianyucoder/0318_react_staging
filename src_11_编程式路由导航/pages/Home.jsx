import React, {Component} from 'react'
import {NavLink,Route,Redirect} from 'react-router-dom'
import HomeMessage from './HomeMessage'
import HomeNews from './HomeNews'
import MyNavlink from '../components/MyNavlink'

export default class Home extends Component {
  render() {
    return (
      <div><h2>Home组件内容</h2>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <MyNavlink to="/home/news" >News</MyNavlink>
            </li>
            <li>
              <MyNavlink to="/home/message">Message</MyNavlink>
            </li>
          </ul>

          {/*注册路由*/}
          <Route path="/home/news" component={HomeNews}/>
          <Route path="/home/message" component={HomeMessage}/>
          <Redirect to="/home/news"/>
        </div>
      </div>
    )
  }
}