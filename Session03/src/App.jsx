import React, { Component } from 'react'
import ChildClassComponent from './components/ChildClassComponent'


export default class App extends Component {

  constructor(){
    super()
    this.state = {
      student:[],
      info:{
        address:"hp",
      },
      count:10
    }
    
  }
  clickToDie =()=>{
    this.setState({
      count: this.state.count +1
    })
  }
  haha=(hoho)=>{
    console.log("hoho",hoho);
  }
  render() {

    return (
      <>
        <h1>Props</h1>
        <ChildClassComponent name="Hao" age={10}></ChildClassComponent>
        <p>giá trị biến đếm {this.state.count}</p>
        <button onClick={this.clickToDie}>click</button>
        <button onClick={()=>this.haha("haohao")}></button>
      </>
    )
  }
}


