import React,{Component} from 'react'
import {Button,message,Calendar } from 'antd';

export default class App extends Component{

  handleClick = () => {
    message.success('点击了')
  }
  onPanelChange = (value, mode)=>{
    console.log(value, mode);
  }


  render(){
    return (
      <div>
        <Button type="primary" onClick={this.handleClick}>Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
        <Button type="link">Link</Button>
        <Calendar onPanelChange={this.onPanelChange} />
      </div>
    )
  }
}