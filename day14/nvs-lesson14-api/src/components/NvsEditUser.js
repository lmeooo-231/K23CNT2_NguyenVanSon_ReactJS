import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function NvsEditUser() {
  // api
  const nvsApiUrl = "https://67da419f35c87309f52ba7ca.mockapi.io/k23cnt2_nguyenvanson/nvs_users";
  // lấy biến nvsId trên url;
  const {nvsId} = useParams(); // <Route path='/edit-user/:nvsId' element={<NvsEditUser />} />; navigate(`/edit-user/${nvsId}`);
  // Khởi tạo state cho componnet
  const [nvs_editUser, setNvsEditUser] = useState({
    nvsFullName:'', nvsEmail:'', nvsPhone:'', nvsActive:false
  })
  // đọc dữ liệu từ api và set cho state: nvs_editUser
  useEffect(()=> {
    axios
      .get(`${nvsApiUrl}+${nvsId}`)
      .then((nvs_response) => {
        const nvs_editUser = nvs_response.data;
        setNvsEditUser(nvs_editUser);
      })
      .catch((error) => {
        console.error('Lỗi khi tải công việc:', error);
      });
  },[nvsId])
 
  // Hàm xử lý khi người dùng thay đổi trạng thái Active (radio button)
  const nvsHandleRadioChange = (ev) => {
    setNvsEditUser({
      ...nvs_editUser,
      nvsActive: ev.target.value, // Cập nhật trạng thái nvsActive theo giá trị của radio button
    });
  };
  // tạo navigate từ react router dom để điều hướng khi cập nhật thành công hoặc back
  const navigate = useNavigate();

  // Khi người dùng nhấn nút submit (cập nhật dữ liệu) => lấy dữ liệu từ form, post vào api
  // Hàm cập nhật những thay đổi trên form vào api
  const nvsHandleSubmit = (event) => {
    event.preventDefault();  // Prevent default form submission
  
    axios
      .put(`${nvsApiUrl}/${nvsId}`, nvs_editUser)  // Correct API URL format
      .then((nvs_editUser) => {
        alert('Cập nhật thành công!');
        navigate('/list-user');  // Navigate back after successful update
      })
      .catch((error) => {
        console.error('Lỗi khi cập nhật người dùng:', error);
      });
  };
  
  // khi click vào nút back
  const nvsHandleBack=(event)=>{
    event.preventDefault();
    navigate('/list-user')
  }
  return (
    <div>
      <h2 className="alert alert-success">Sửa thông tin User</h2>
      <form className='table table-border' onSubmit={nvsHandleSubmit}>
        <div className="mb-3 row">
          <label htmlFor="nvsFullName" className="col-sm-2 col-form-label">Full Name</label>
          <div className="col-sm-6">
            <input
              type="text"
              className="form-control"
              id="nvsFullName"
              name="nvsFullName"
              value={nvs_editUser.nvsFullName}
              onChange={(ev)=>setNvsEditUser({...nvs_editUser,nvsFullName:ev.target.value})} 
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="nvsEmail" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-6">
            <input
              type="email"
className="form-control"
              id="nvsEmail"
              name="nvsEmail"
              value={nvs_editUser.nvsEmail}
              onChange={(ev)=>setNvsEditUser({...nvs_editUser,nvsEmail:ev.target.value})} 
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="nvsPhone" className="col-sm-2 col-form-label">Phone</label>
          <div className="col-sm-6">
            <input
              type="tel"
              className="form-control"
              id="nvsPhone"
              name="nvsPhone"  
              value={nvs_editUser.nvsPhone}
              onChange={(ev)=>setNvsEditUser({...nvs_editUser,nvsPhone:ev.target.value})} 
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Active</label>
          <div className="col-sm-6">
            <input
              type="radio"
              id="nvsActive_true"
              name="nvsActive"
              value={'true'}
              checked={nvs_editUser.nvsActive === 'true' || nvs_editUser.nvsActive === true}
              onChange={nvsHandleRadioChange} 
            /> 
            <label htmlFor="nvsActive_true" className="mx-2 text-success">Hoạt động</label>
            
            <input
              type="radio"
              id="nvsActive_false"
              name="nvsActive"
              value={'false'}
              checked={nvs_editUser.nvsActive === 'false' || nvs_editUser.nvsActive === false}
              onChange={nvsHandleRadioChange} 
            /> 
            <label htmlFor="nvsActive_false" className="mx-2 text-danger">Đang khóa</label>
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label"></label>
          <div className="col-sm-6">
            <button type="submit" className="mx-1">Update</button>
            <button type="button" className="px-3" onClick={nvsHandleBack}>Back</button>
          </div>
        </div>
      </form>

    </div>
  )
}