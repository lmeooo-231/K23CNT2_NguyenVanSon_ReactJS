import React, { Component } from "react";
import NvsControl from "./components/NvsControl";
import NvsStudentList from "./components/NvsStudentList";
import NvsForm from "./components/NvsForm";

class NvsApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      nvsStudents:[
        {nvsId:"SV001",nvsStudentName:"Nguyễn Văn Sơn",nvsAge:500,nvsGender:"Nam",nvsBirthday:"23/11/1525",nvsBirthPlace:"HN", nvsAddress:"Hà Nội"},
        {nvsId:"SV002",nvsStudentName:"Chu Nguyên Chương",nvsAge:188,nvsGender:"Nữ",nvsBirthday:"25/05/1179",nvsBirthPlace:"HP", nvsAddress:"Trung quốc"},
        {nvsId:"SV003",nvsStudentName:"Tần Thủy Hoàng",nvsAge:55,nvsGender:"Nam",nvsBirthday:"25/05/1079",nvsBirthPlace:"TpHCM", nvsAddress:"Trung Quốc"},
        {nvsId:"SV004",nvsStudentName:"Hoàng Thùy Linh",nvsAge:55,nvsGender:"Nam",nvsBirthday:"25/05/1079",nvsBirthPlace:"TpHCM", nvsAddress:"Hồ chí minh"},
      ],
      nvsStudent:"",

    }
  }

  // Hàm xử lý sự kiện view Student
  nvsHandleView = (nvsStudent)=>{
    this.setState({
      nvsStudent: nvsStudent,
    });
  }

  render() {
    // log
    console.log("View Student:", this.state.nvsStudent);
    
    return (
      <div>
        <h1 className="text-center">
          Nguyễn Văn Sơn - K23CNT3 - Mini Project1
        </h1>
        <section className="container-fluid mt-3">
          <div className="row">

            <div className="col-lg-7 grid-margin stretch-card">
              <div className="card">

                {/* header */}
                <NvsControl  />
                {/* danh sách sinh vien  */}
                <NvsStudentList  renderNvsStudents={this.state.nvsStudents} onNvsHandleView={this.nvsHandleView}/>
              </div>
            </div>

            <div className="col-5 grid-margin">
              {/* form  */}
              <NvsForm  renderNvsStudent = {this.state.nvsStudent}/>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default NvsApp;