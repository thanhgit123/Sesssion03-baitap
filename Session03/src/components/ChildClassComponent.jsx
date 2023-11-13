import React, { Component } from 'react'

export default class ChildClassComponent extends Component {
  render() {
    console.log("111",this.props);
    //   cú pháp destructuring
    const {name,age}=this.props
    return (
        <>
            <div>ChildClassComponent</div>
            <p>{name},{age} tuổi</p>
        
        </>

    )
  }
}
