import React, { Component } from 'react'

export default class B2 extends Component {
    constructor(){
        super()
        this.state={
            content:"",
        }
    }
    // gọi hàm thay đổi nội dung văn bản
    handleChangeText=()=>{
        this.setState({content:"new content của văn bản"})
    }
  render() {
    const {content} = this.state
    return (
      <>    
        <p>{content}</p>
        <button onClick={this.handleChangeText}></button>
            
      </>
    )
  }
}
