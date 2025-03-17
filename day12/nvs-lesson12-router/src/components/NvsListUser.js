import React from 'react'

export default function NvsListUser({renderNvsUsers}) {

    const nvsElements = renderNvsUsers.map((nvsItem, index)=>{
        return (
            <>
                <tr key={index}> 
                    <td>{index+1}</td>
                    <td>{nvsItem.id}</td>
                    <td>{nvsItem.nvsFullName}</td>
                    <td>{nvsItem.nvsUserName}</td>
                    <td>{nvsItem.nvsPass}</td>
                </tr>
            </>)
    })
  return (
    <div>
        <h2>Danh sách tài khoản</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>ID</th>
                    <th>FullName</th>
                    <th>UserName</th>
                    <th>Password</th>
                </tr>
            </thead>
            <tbody>
                {nvsElements}
            </tbody>
        </table>
    </div>
  )
}