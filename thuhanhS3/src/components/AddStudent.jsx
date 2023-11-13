import React, { Component } from "react";

export default class AddStudent extends Component {
  constructor() {
    super();
    this.state = {
      student: {
        name: "",
        age: "",
        
      },
    };
  }
// nganw chan viec submit len form
  

  changeValue = (e) =>{
    let myName = e.target.name;
    let value = e.target.value;
    this.setState({
      student: {
        ...this.state.student,
        [myName]: value,
      },
    });
    

  };
  render() {
    return (
      <>
        <form action="">
          <label>Tên</label>
          <br />
          <input type="text" name="name" id="" onChange={this.changeValue} value={this.state.name}  />
          <br />
          <label>tuổi</label>
          <br />
          <input type="text" name="age" id="" onChange={this.changeValue} value={this.state.age} />
          <br />
         
          <button
            type="button"
            onClick={() => {
              this.props.saveMe(this.state.student);
            }}
          >
            save
          </button>
        </form>
      </>
    );
  }
}
