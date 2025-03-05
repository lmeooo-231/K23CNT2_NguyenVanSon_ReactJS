import React, { Component } from "react";

class NvsStudent extends Component {
    constructor(props){
        super(props);
    }

    // Hàm xử lý chức năng xem
    nvsHandleView = (nvsStudent)=>{
        // Chuyển lên NvsStudentList
        this.props.onNvsHandleView(nvsStudent);
    }
  render() {
    // lấy đối tượng dữ liệu chuyển từ NvsStudentList
    let {renderNvsStudent, key} = this.props;
    console.log("Student:",renderNvsStudent);
    
    return (
      <>
        <tr>
          <td>{key}</td>
          <td>{renderNvsStudent.nvsId}</td>
          <td>{renderNvsStudent.nvsStudentName}</td>
          <td>{renderNvsStudent.nvsAge}</td>
          <td>{renderNvsStudent.nvsGender}</td>
          <td>
            <div className="template-demo">
              <button type="button" className="btn btn-danger btn-icon-text" 
                    onClick={()=>this.nvsHandleView(renderNvsStudent)}
                    >
                Xem
              </button>
              <button type="button" className="btn btn-warning btn-icon-text">
                Sửa
              </button>
              <button type="button" className="btn btn-success btn-icon-text">
                Xóa
              </button>
            </div>
          </td>
        </tr>
      </>
    );
  }
}

export default NvsStudent;