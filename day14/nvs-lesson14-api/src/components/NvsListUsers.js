import React from 'react'

import nvsAxiosUsers from '../api/nvs_api'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function NvsListUsers() {
    const navigate = useNavigate();
    const [nvsListUser, setNvsListUser] = useState([]);
    const nvsGetAllUser = async()=>{
        //Goi API lay du lieu
        const nvs_resp = await nvsAxiosUsers.get("/nvs_users");
        setNvsListUser(nvs_resp.data);
    }
    
    // Gọi API và lấy dữ liệu cho biến state (nvsListUser)
    useEffect(()=>{
        nvsGetAllUser()
    },[])

    const nvsHandleUpdate = (nvsId)=>{
        navigate(`/edit-user/${nvsId}`);
    }
    const nvsHandleDelete = async (nvsId)=>{
        if(window.confirm('Bạn có muốn xóa không?')){
            await nvsAxiosUsers.delete("/nvs_users/"+nvsId);

            let nvsListUserDelete = nvsListUser.filter(x=>x.nvsId !=nvsId);
            setNvsListUser(nvsListUserDelete);
        }
    }
    // tạo hiển thị active
    const nvsActiveElement = (flag)=>{
        if(flag===true || flag =="true")
            return <span class='badge text-bg-success'>Hoạt động </span>
        else
            return <span class='badge text-bg-danger'>Khóa </span>
    }
    // duyệt dữ liệu từ state và hiển thị
    const nvsElementUser = nvsListUser.map((nvs_user)=>{
        return <tr key={nvs_user.nvsId}>
            <td className='text-center'>{nvs_user.nvsId}</td>
            <td>{nvs_user.nvsFullName}</td>
            <td>{nvs_user.nvsEmail}</td>
            <td>{nvs_user.nvsPhone}</td>
            <td>
                {
                    nvsActiveElement(nvs_user.nvsActive)
                }
            </td>
            <td className='text-center'>
                <button onClick={()=>nvsHandleUpdate(nvs_user.nvsId)} className='mx-1 px-3'>Edit</button>
                <button onClick={()=>nvsHandleDelete(nvs_user.nvsId)} className='mx-1'>Delete</button>
            </td>
        </tr>
    })

  return (
    <div>
        <table className='table table-bordered'>
                <thead>
                    <tr className='text-center'>
                        <th>User ID</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Active</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {nvsElementUser}
                </tbody>
            </table>
    </div>
  )
}