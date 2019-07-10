import React, {Component} from 'react'

export default class HomeMessageDetail extends Component {

  constructor(props){
    super(props)
    this.id = this.props.match.params.id
  }

   state = {
     messageDetails: [
       {id: 1, title: 'Message001', content: '我爱你, 中国'},
       {id: 2, title: 'Message002', content: '我爱你, 老婆'},
       {id: 3, title: 'Message003', content: '我爱你, 孩子'},
       {id: 4, title: 'Message004', content: '我爱你, 0318'},
     ]
   }

  render() {
    let {id} =  this
    let {messageDetails} = this.state
    let data = messageDetails.find((item)=>{
      return item.id === id*1
    })
    return (
      <ul>
        <li>ID: {data.id}</li>
        <li>TITLE: {data.title}</li>
        <li>CONTENT: {data.content}</li>
      </ul>

    )
  }
}