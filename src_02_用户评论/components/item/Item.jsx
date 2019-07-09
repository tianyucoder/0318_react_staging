import React, {Component} from 'react'
import './Item.css'

export default class Item extends Component {

  delete = (userId)=>{
    let {deleteComment,userName} = this.props
    if(window.confirm(`确定删除${userName}用户的评论吗`)){
      /*//1.第一种获取userId的方式
      let {userId} = this.props*/

      //2.删除上述ID所对应的数据
      deleteComment(userId)
    }
  }

  render() {
    let {userName,content,userId} = this.props
    return (
      <li className="list-group-item">
        <div className="handle">
          <a href="#1" onClick={()=>{return this.delete(userId)}}>删除</a>
        </div>
        <p className="user"><span>{userName}</span><span>说:</span></p>
        <p className="centence">{content}</p>
      </li>

    )
  }
}