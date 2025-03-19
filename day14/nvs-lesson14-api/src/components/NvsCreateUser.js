import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function NvsCreateUser() {
  
  let nvsuser = {
    id:'',
    nvsFullName:"",
    nvsEmail:"",
    nvsPhone:"",
    nvsPhone:false
  }

  const [nvs_user, setNvsUser] = useState(nvsuser)
  const nvsApiUrl = "https://67da419f35c87309f52ba7ca.mockapi.io/k23cnt2_nguyenvanson/nvs_users"
  
  const navigate = useNavigate();

  const nvsHandleSubmit = (event)=>{
    event.preventDefault();
    console.log(nvs_user);
    axios
      .post(nvsApiUrl, nvs_user)
      .then((response) => {
        navigate('/list-user')
      })
      .catch((error) => console.log('Lỗi khi thêm user.'));

  }

  const nvsHandleBack=(event)=>{
    event.preventDefault();
    navigate('/list-user')
  }
  return (
    <div>
      <h2 className="alert alert-success">Thêm mới thông tin User</h2>
      <form>
        <div className="mb-3 row">
          <label htmlFor="nvsFullName" className="col-sm-2 col-form-label">
            Full Name
          </label>
          <div className="col-sm-6">
            <input
              type="text"
              className="form-control"
              id="nvsFullName"
              name="nvsFullName"
              value={nvs_user.nvsFullName}
              onChange={(ev)=>setNvsUser({...nvs_user,nvsFullName:ev.target.value})} 
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="nvsEmail" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-6">
            <input
              type="email"
              className="form-control"
              id="nvsEmail"
              name="nvsEmail"
              value={nvs_user.nvsEmail}
              onChange={(ev)=>setNvsUser({...nvs_user,nvsEmail:ev.target.value})} 
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="nvsPhone" className="col-sm-2 col-form-label">
            Phone
          </label>
          <div className="col-sm-6">
            <input
              type="tel"
              className="form-control"
              id="nvsPhone"
              name="nvsPhone"
              value={nvs_user.nvsPhone}
              onChange={(ev)=>setNvsUser({...nvs_user,nvsPhone:ev.target.value})} 
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="nvsPhone" className="col-sm-2 col-form-label">
            Active
          </label>
          <div className="col-sm-6">
            <input
              type="radio"
              id="nvsPhone_true"
              name="nvsPhone"
              value={'true'}
              onChange={(ev)=>setNvsUser({...nvs_user,nvsPhone:ev.target.value})} 
            /> <label htmlFor="nvsPhone_true" className="mx-2 text-success">Hoạt động</label>
            <input
              type="radio"
              id="nvsPhone_false"
              name="nvsPhone"
              value={'false'}
              onChange={(ev)=>setNvsUser({...nvs_user,nvsPhone:ev.target.value})} 
            /> <label htmlFor="nvsPhone_false" className="mx-2 text-danger">Đang khóa</label>
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="" className="col-sm-2 col-form-label"></label>
          <div className="col-sm-6">
            <button className="mx-1" onClick={nvsHandleSubmit}>Create</button>
            <button className="px-3" onClick={nvsHandleBack}>Back</button>
          </div>
        </div>
      </form>
    </div>
  );
}