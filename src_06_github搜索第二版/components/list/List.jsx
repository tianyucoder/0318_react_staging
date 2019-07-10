import React, {Component} from 'react'
import Item from '../item/Item'
import axios from 'axios'

export default class List extends Component {

  state = {
    isFirst:true,
    isLoading:false,
    users:[],
    errMsg:''
  }
  
  componentWillReceiveProps({keyWord}) {
    console.log(keyWord)
    //2.发送请求
    this.setState({
      isFirst:false,
      isLoading:true,
      users:[],
      errMsg:''
    })
    const url = `https://api.github.com/search/users?q=${keyWord}`
    axios.get(url)
      .then((result)=>{
        console.log(result)
        let users = result.data.items
        this.setState({
          isFirst:false,
          isLoading:false,
          users,
          errMsg:''
        })
      })
      .catch((err)=>{
        this.setState({
          isFirst:false,
          isLoading:false,
          users:[],
          errMsg:err.toString()
        })
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

