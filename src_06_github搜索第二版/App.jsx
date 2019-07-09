import React,{Component} from 'react'
import Search from './components/search/Search'
import List from './components/list/List'

export default class App extends Component{

  state = {
    keyWord:'',
  }

  updateKeyWord = (keyWord)=>{
    this.setState({keyWord})
  }

  render(){
    return (
      <div className="container">
        <Search updateKeyWord={this.updateKeyWord}/>
        <List keyWord={this.state.keyWord}/>
      </div>
    )
  }
}