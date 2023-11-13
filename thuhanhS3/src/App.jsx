import React, { Component } from "react";
import Search from "./components/Search";
import Sort from "./components/Sort";
import ListStudent from "./components/ListStudent";
import Student from "./components/Student";
import AddStudent from "./components/AddStudent";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      students: [
        {
          name: "hao",
          age: 17,
          id: "1",
        },
        {
          name: "mao",
          age: 30,
          id: "2",
        },
        {
          name: "Aảo",
          age: 25,
          id: "3",
        },
        {
          name: "nạo",
          age: 21,
          id: "4",
        },
      ],
      searchValue: "",
      sort: "",
    };
    // localStorage.setItem("students",JSON.stringify(this.state.students))

  }

  // function save
  saveInfo = (infor) => {
    this.setState({
      students:[...this.state.students,{...infor,id:this.uuid()}],
    });
    localStorage.setItem("students",JSON.stringify(this.state.students))
  };

  // khởi tạo function
  searchDir = (value) => {
    this.setState({
      searchValue: value,
    });
  };

  // khởi tạo function sort
  sortBy = (sortBy) => {
    // console.log("sort",sortBy);
    this.setState({
      sort: sortBy,
    });
  };

  
  // function tao id ngau nhien
  uuid=()=>{
    return Math.floor(Math.random()*999999999 + new Date().getMilliseconds());
  }

  // function edit user
  editUser=(idUser)=>{
    // timf kiem user
    let result = this.state.students.filter((item)=>{
      return 
    })
  }

  


  render() {
    let student = [];
    if (this.state.searchValue != "") {
      let result = this.state.students.filter((item) => {
        return item.name.indexOf(this.state.searchValue) != -1;
      });
      if (result.length == 0) {
        student = [...this.state.students];
      } else {
        student = result;
      }
    } else {
      student = this.state.students;
    }

    // logic xử lý khi sort
    if (this.state.sort != "") {
      if (this.state.sort == "name") {
        let result = this.state.students.sort((a, b) => {
          if (
            a.name.split(" ")[a.name.split(" ").length - 1] >
            b.name.split(" ")[b.name.split(" ").length - 1]
          ) {
            return 1;
          } else if (
            a.name.split(" ")[a.name.split(" ").length - 1] ==
            b.name.split(" ")[b.name.split(" ").length - 1]
          ) {
            return 0;
          } else {
            return -1;
          }
        });
        student = result;
      } else {
        let resultd = this.state.students.sort((a, b) => {
          return a.age - b.age;
        });
        student = resultd;
      }
    }

    return (
      <>
        {/* các component con */}
        <Search search={this.searchDir}></Search>
        <Sort sort={this.sortBy}></Sort>
        <AddStudent saveMe={this.saveInfo}></AddStudent>
        <ListStudent edit={this.editUser} student={student}></ListStudent>
      </>
    );
  }
}
