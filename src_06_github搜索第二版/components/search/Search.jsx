import React, {Component} from 'react'

export default class Search extends Component {

  keyWordRef = React.createRef()

  search = ()=>{
    let {updateKeyWord} = this.props
    //1.获取用户输入
    let keyWord = this.keyWordRef.current.value.trim()
    //2.维护关键词到App的状态中，进而传给List
    updateKeyWord(keyWord)
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