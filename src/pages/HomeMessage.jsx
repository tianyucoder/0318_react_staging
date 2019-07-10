import React, {Component} from 'react'
import {Link,Route} from 'react-router-dom'
import HomeMessageDetail from './HomeMessageDetail'

export default class HomeMessage extends Component {

  state = {
    messages:[]
  }

  componentDidMount() {
    this.timeId = setTimeout(()=>{
      this.setState({
        messages:[
          {mid:1,content:'message1'},
          {mid:2,content:'message2'},
          {mid:3,content:'message3'},
          {mid:4,content:'message4'},
        ]
      })
    },2000)
  }

  componentWillUnmount() {
    console.log('我是HomeMessage组件，我即将离开人世，我要把定时器停掉')
    clearTimeout(this.timeId)
  }

  render() {
    let {messages} = this.state
    return (
      <div>
        <ul>
          {
            messages.map((item)=>{
                return (
                  <li key={item.mid}>
                    <Link to={`/home/message/detail/${item.mid}`}>{item.content}</Link>&nbsp;&nbsp;
                    {/*<button>push查看</button>&nbsp;&nbsp;
                    <button>replace查看</button>*/}
                  </li>
                )
            })
          }
        </ul>
        <button>回退</button>
        <hr/>
        <Route path="/home/message/detail/:id" component={HomeMessageDetail}/>
      </div>
    )
  }
}