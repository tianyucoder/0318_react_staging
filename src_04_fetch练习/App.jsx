import React,{Component} from 'react'

export default class App extends Component{

  state = {
    isLoading:true,
    repoName:'',
    repoUrl:'',
    errMsg:''
  }

  //关键词
  keyWord = 'r'

  async componentDidMount() {

    const url = `https://api.github.com/search/repositories?q=${this.keyWord}&sort=stars`

    fetch(url)
      .then((result)=> {
        //console.log(result)
        if(result.ok){
          return result.json()
        }else{
          return Promise.reject('请求资源不存在')
        }
      })
      .then((data)=>{
        console.log('成功了')
        let repoInfo = data.items[0]
        this.setState({
          isLoading:false,
          repoName:repoInfo.name,
          repoUrl:repoInfo.html_url,
          errMsg:''
        })
      })
      .catch((err)=>{
        console.log(err.toString())
        this.setState({
          isLoading:false,
          repoName:'',
          repoUrl:'',
          errMsg:err.toString()
        })
      })


  }

  render(){
   let {repoName,repoUrl,errMsg,isLoading} = this.state
   if(isLoading){
     return  <h3>loading...</h3>
   }else if(errMsg){
     return  <h3>{errMsg}</h3>
   }else{
     return <h3>github上包含【{this.keyWord}】关键字的所有仓库中，点赞数量最多的是<a href={repoUrl}>{repoName}</a></h3>
   }
  }
}
