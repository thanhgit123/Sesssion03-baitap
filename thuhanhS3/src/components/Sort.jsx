import React, { Component } from 'react'

export default class Sort extends Component {
  
  changeOption=(event)=>{
    // console.log(event.target.value);
    // lấy giá trị
    this.props.sort(event.target.value)
  }
  render() {
    // gọi hàm từ cha sang con rồi truyền giá trị từ con sang cha
    return (
      <>
          <select name="" id="" onChange={ this.changeOption}>
              <option value="">Sắp xếp theo</option>
              <option value="name">Bảng chữ cái</option>
              <option value="age">Tuổi tăng dần</option>
          </select>     
      </>
    )
  }
}
