import React, { useState } from 'react'

export default function NvsFormUser({onNvsAddNew}) {

    const [id, setNvsId] = useState('')
    const [nvsFullName, setNvsFullName] = useState('')
    const [nvsUserName, setNvsUserName] = useState('')
    const [nvsPass, setNvsPass] = useState('')

   

    const nvsHandleSubmit = (event) =>{
        event.preventDefault();
        console.log(id,nvsFullName,nvsUserName, nvsPass)
        
        onNvsAddNew({id,nvsFullName,nvsUserName, nvsPass})
    }
  return (
    <div>
        <form>
            <p>Mã sinh viên:
                <input type='text' name='id' value={id} onChange={(ev)=>setNvsId(ev.target.value)} /> </p>
            <p>Họ và tên:
                <input type='text' name='nvsFullName' value={nvsFullName} onChange={(ev)=>setNvsFullName(ev.target.value)}/> </p>
            <p>Tài khoản:
                <input type='text' name='nvsUserName' value={nvsUserName} onChange={(ev)=>setNvsUserName(ev.target.value)}/> </p>
            <p>Mật khẩu:
                <input type='password' name='nvsPass' value={nvsPass} onChange={(ev)=>setNvsPass(ev.target.value)} /> </p>

            <p>
                <button name='nvsSave' onClick={nvsHandleSubmit}>Save</button>
            </p>
        </form>
    </div>
  )
}