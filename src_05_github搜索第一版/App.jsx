import React,{Component} from 'react'
import Search from './components/search/Search'
import List from './components/list/List'

export default class App extends Component{

  state = {
    isFirst:true,
    isLoading:false,
    users:[],
    errMsg:''
  }

  updateAppState = ({isFirst,isLoading,users,errMsg})=>{
    this.setState({
      isFirst,
      isLoading,
      users,
      errMsg
    })
  }

  render(){
    return (
      <div className="container">
        <Search updateAppState={this.updateAppState}/>
        <List appState={this.state}/>
      </div>
    )
  }
}