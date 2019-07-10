import React, {Component} from 'react'
import Item from '../item/Item'
import PubSub from 'pubsub-js'


export default class List extends Component {

  state = {
    isFirst:true,
    isLoading:false,
    users:[],
    errMsg:''
  }

  componentDidMount() {
    PubSub.subscribe('updateListSate', (msg, {isFirst,isLoading,users,errMsg}) => {
      this.setState({isFirst,isLoading,users,errMsg})
    })
  }


  render() {
    let {isFirst,isLoading,users,errMsg} = this.state
    if(isFirst){
      return <h2>输入关键字，随后点击搜索</h2>
    }else if(isLoading){
      return <h2>loading...</h2>
    }else if(errMsg){
      return <h2>{errMsg}</h2>
    }else{
      return (
        <div className="row">
          {
            users.map((item)=>{
              return <Item key={item.login} {...item}></Item>
            })
          }
        </div>
      )
    }
  }
}

