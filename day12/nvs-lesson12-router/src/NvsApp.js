import React, { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import NvsHome from './components/NvsHome'
import NvsAbout from './components/NvsAbout'
import NvsContact from './components/NvsContact'
import NvsListUser from './components/NvsListUser'
import NvsFormUser from './components/NvsFormUser'
export default function NvsApp() {

  const listUsers  = [
    {id:"SV001", nvsFullName:"Nguyễn Văn Sơn", nvsUserName:ốnnw", nvsPass:"123456a@"},
    {id:"SV002", nvsFullName:"Trịnh Quan Quang", nvsUserName:"QuanTrinh", nvsPass:"123456a@"},
    {id:"SV003", nvsFullName:"Nguyễn Quang A", nvsUserName:"QuangA", nvsPass:"123456a@"},
  ]

  const[nvsUsers, setNvsUsers] = useState(listUsers)

  // Hàm xử lý sự kiện thêm mới
  const nvsHandleAdd = (nvsParam)=>{
    console.log("nvsHandleAdd:", nvsParam);
    
    setNvsUsers(prev =>{ 
      return [
        ...prev,
        nvsParam
      ]
    })
  }
  return(
    <div className='container border my-3'>
      <h1>React Router Dom - Demo - [Nguyễn Văn Sơn - K23CNT2]</h1>
      <hr/>
      <Router>
      <NvsNavNar />
            <Routes>
                <Route path='/' element = {<NvsHome/>} />
                <Route path='/about' element = {<NvsAbout/>} />
                <Route path='/contact' element = {<NvsContact/>} />
                <Route path='/list-user' element = {<NvsListUser  renderNvsUsers={nvsUsers}/>} />
                <Route path='/create-user' element = {<NvsFormUser  onNvsAddNew={nvsHandleAdd}/>} />
            </Routes>
      </Router>
    </div>
  )
}