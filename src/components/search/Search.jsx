import React, {Component} from 'react'
import axios from 'axios'

export default class Search extends Component {

  keyWordRef = React.createRef()

  search = ()=>{
    //1.获取用户输入
    let keyWord = this.keyWordRef.current.value.trim()
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
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input type="text" placeholder="enter the name you search" ref={this.keyWordRef}/>
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}