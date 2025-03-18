import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function NvsReadApiLocal() {
    // khởi tạo state
    const [nvsListUser, setNvsListUser] = useState([])
    // đọc dữ liệu từ api local  và set cho nvsListUser
    const apiUrl = "http://localhost:3001/users"
    // Lấy danh sách từ apiUrl
    useEffect(()=>{
        axios
            .get(apiUrl)
            .then((nvsResponse)=>{
                setNvsListUser(nvsResponse.data)
            })
            .catch((error)=>{
                console.log("Lỗi");
            })
    },[])

  return (
    <div>
        <h2>Đọc dữ liệu từ API Local</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>FullName</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {
                    nvsListUser.map((nvsItem, index)=>{
                        return (
                            <tr>
                                <td>{nvsItem.fullName}</td>
                                <td>{nvsItem.age}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}