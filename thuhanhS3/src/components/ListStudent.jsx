import React, { Component } from "react";
import Student from "./Student";
export default class ListStudent extends Component {


  handleEdit=(idUser)=>{
    this.props.edit(idUser)
  }

  render() {
    // console.log(this.props);
    // let student = this.props.student
    const { student } = this.props;

    return (
      <>
        <table border={1} cellPadding={2}>
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên</th>
              <th>Tuổi</th>
              <th>ID</th>
              <th>Hành động</th>
            </tr>
          </thead>

          <tbody>
            {student.map((item, index) => {
              return (
                <Student edit={this.handleEdit} haohao={item} index={index} key={index}></Student>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}
