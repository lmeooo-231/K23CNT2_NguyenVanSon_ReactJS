
// Thêm mới dữ liệu 

import React, { useState } from 'react'
import axios from 'axios'
export default function NvsCreateMockAPI() {
    // khởi tạo state
    const [nvsFullName,setNvsFullName] = useState('')
    const [nvsAge,setNvsAge] = useState(0)
    const [nvsActive,setNvsActive] = useState(true)

    // api post
    const nvsCreateUserApi = "https://67d8d4aa00348dd3e2a85ce1.mockapi.io/k23cnt1_trinhvanchung/nvs_users";

    // khi submit form
    const nvsHandleSubmit = (event)=>{
        event.preventDefault();
        console.log("nvsActive:",nvsActive);
        let nvsNewUser = {nvsFullName,nvsAge,nvsActive};
        console.log(nvsNewUser);

        // ghi dữ liệu vào api
        axios
            .post(nvsCreateUserApi, nvsNewUser)
            .then((nvs_response)=>{
                
            })
        
    }
  return (
    <div className='alert alert-info'>
        <h2>Thêm mới users</h2>
        <hr/>
        <form>
            <div className=' mb-1'>
                <label for="nvsFullName">Full Name</label>
                <input type='text' name='nvsFullName' id="nvsFullName" 
                    value={nvsFullName}
                    onChange={(ev)=>setNvsFullName(ev.target.value)} />
            </div>
            <div className=' mb-1'>
                <label for="nvsAge">Age</label>
                <input type='number' name='nvsAge' id="nvsAge" 
                    value={nvsAge}
                    onChange={(ev)=>setNvsAge(ev.target.value)} />
            </div>
            <div className=' mb-1'>
                <label for="nvsActive">Active</label>
                <input type='radio' name='nvsActive' id="nvsActive_hd" value={'true'} 
                    onChange={(ev)=>setNvsActive(ev.target.value)} />
                    <label for="nvsActive_hd"> Hoạt động</label>
                <input type='radio' name='nvsActive' id="nvsActive_kh" value={'false'} 
                    onChange={(ev)=>setNvsActive(ev.target.value)}/>
                    <label for="nvsActive_kh"> Khóa</label>
            </div>
            <button onClick={nvsHandleSubmit}>Create</button>
        </form>
    </div>
  )
}
