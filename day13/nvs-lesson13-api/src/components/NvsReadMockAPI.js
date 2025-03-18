import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function NvsReadMockAPI() {
    // khởi tạo state 
    const [nvsListUser, setNvsListUser] = useState([])
    // api
    const nvsApiOnline = "https://67d8d4aa00348dd3e2a85ce1.mockapi.io/k23cnt1_trinhvanchung/nvs_users"
    // Đọc dữ liệu từ api bằng axios
    useEffect(()=>{
        axios
            .get(nvsApiOnline)
            .then((nvs_response)=>{
                setNvsListUser(nvs_response.data)
            })
            .catch((error)=>{
                console.log("Lỗi phát sinh");
            })
    },[])

    // view data
    const nvsElementUser = nvsListUser.map((nvs_item, index)=>{
        return(
            <tr>
                <td>{nvs_item.nvsId}</td>
                <td>{nvs_item.nvsFullName}</td>
                <td>{nvs_item.nvsAge}</td>
                <td>{nvs_item.nvsActive?'Hoạt động':'Khóa'}</td>
                <td>
                    <button>Sửa</button>
                    <button>Xóa</button>
                </td>
            </tr>
        )
    })
  return (
    <div className='alert alert-danger'>
        <h2>Danh sách</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>FullName</th>
                    <th>Age</th>
                    <th>Active</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                   nvsElementUser
                }
            </tbody>
        </table>
    </div>
  )
}