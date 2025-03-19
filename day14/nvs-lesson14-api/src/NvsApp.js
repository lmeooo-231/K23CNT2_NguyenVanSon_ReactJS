import React from 'react';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import NvsHome from './components/NvsHome';
import NvsListUsers from './components/NvsListUsers';
import NvsCreateUser from './components/NvsCreateUser';
import NvsEditUser from './components/NvsEditUser';
import NvsNavBar from './components/NvsNavBar';
export default function NvsApp() {
    return (
      <div>
        <h1>Nguyễn Văn Sơn - miniproject</h1>
        <Router >
          <NvsNavBar/>
          <hr/>
          <Routes>
            <Route path='/' element={<NvsHome></NvsHome>} />
            <Route path='/list-user' element={<NvsListUsers/>} />
            <Route path='/create-user' element={<NvsCreateUser/>} />
            <Route path='/edit-user/:nvsId' element={<NvsEditUser/>} />
          </Routes>
        </Router>
      </div>
    )
}