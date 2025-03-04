import React, { Component } from 'react';

class NvsRenderListStudent extends Component {
    constructor(props){
        super(props);
        this.state = {
            nvsStudents:[
                {tcvId:"NTU001",nvsName:"Nguyễn Văn Sơn", nvsAge:46, nvsClass:"K23CNT2"},
                {tcvId:"NTU002",nvsName:"Nguyễn Quang A", nvsAge:22, nvsClass:"K23CNT2"},
                {tcvId:"NTU003",nvsName:"Nguyễn Quang B", nvsAge:21, nvsClass:"K23CNT2"},
                {tcvId:"NTU004",nvsName:"Nguyễn Quang C", nvsAge:23, nvsClass:"K23CNT2"},
            ],
        }
    }
    render() {
        let nvsElement = this.state.nvsStudents.map((nvsItem, index)=>{
            return(
                    <tr>
                        <td>{index+1}</td>
                        <td>{nvsItem.tcvId}</td>
                        <td>{nvsItem.nvsName}</td>
                        <td>{nvsItem.nvsAge}</td>
                        <td>{nvsItem.nvsClass}</td>
                        <td>
                            <button>Sửa</button>
                            <button>Xóa</button>
                        </td>
                    </tr>
            )
        })
        return (
            <div className='alert alert-info'>
                <h2>Danh sách sinh viên</h2>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>nvsId</th>
                            <th>nvsName</th>
                            <th>nvsAge</th>
                            <th>nvsClass</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {nvsElement}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default NvsRenderListStudent;