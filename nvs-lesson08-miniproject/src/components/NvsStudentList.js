import React, { Component } from "react";
import NvsStudent from "./NvsStudent";

class NvsStudentList extends Component {
    constructor(props){
        super(props);

    }
        // Hàm xử lý sự kiện xêm
    nvsHandleView = (nvsStudent)=>{
        // Chuyển dữ liệu lên NvsApp
        this.props.onNvsHandleView(nvsStudent);
    }


  render() {
    // lấy dữ liệu trong props từ NvsApp chuyển xuống
    let {renderNvsStudents} = this.props;
    console.log("List:",renderNvsStudents);
    
    // chuyển dữ liệu vào NvsStudent để hiển thị
    let nvsElementStudent = renderNvsStudents.map((nvsItem,index)=>{
        return <NvsStudent key={index} renderNvsStudent={nvsItem} onNvsHandleView={this.nvsHandleView} />
    })
    return (
      <div className="card-body">
        <h3 className="card-title">Danh sách sinh viên</h3>
        <div className="table-responsive pt-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Mã sinh viên</th>
                <th>Tên sinh viên</th>
                <th>Tuổi</th>
                <th>Giới tính</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>

             {nvsElementStudent}
              
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default NvsStudentList;