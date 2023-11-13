import React, { Component } from "react";

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
    };
  }
  changeValue = (event) => {
    //lấy giá trị ô input ng dùng nhập vào
    // console.log(event.target.value);
    // sau khi lây xong cập nhật state
    this.setState({
      search: event.target.value,
    });
  };

  render() {
    // console.log("2222",this.props);
    return (
      <>
        <button onClick={() => this.props.search(this.state.search)}>
          Tìm kiếm
        </button>
        <input type="text" onChange={this.changeValue} />
      </>
    );
  }
}
