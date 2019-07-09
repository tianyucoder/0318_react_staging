import React,{Component} from 'react'
import Add from './components/add/Add'
import List from './components/list/List'

export default class App extends Component{

  state = {comments:[]}

  addComment = (commentObj)=>{
    let comments = [...this.state.comments]
    comments.unshift(commentObj)
    this.setState({comments})
  }

  deleteComment = (userId)=>{
    let comments = [...this.state.comments]
    comments.forEach((item,index)=>{
        if(item.userId === userId){
          //如果匹配成功，删除匹配到的这个
          comments.splice(index,1)
        }
    })
    this.setState({comments})
  }

  render(){
    let {comments} = this.state
    return (
      <div>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <Add addComment={this.addComment}/>
          <List comments={comments} deleteComment={this.deleteComment}/>
        </div>
      </div>
    )
  }
}

