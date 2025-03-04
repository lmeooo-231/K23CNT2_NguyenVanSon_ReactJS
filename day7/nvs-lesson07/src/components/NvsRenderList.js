import React from 'react'

export default function NvsRenderList() {
    const nvsList = ["Nguyễn Văn Sơn", "ReactJS","Fit-NTU"];

    const nvsElement = nvsList.map(item=>{
        return <li>{item}</li>
    })

  return (
    <div className='alert alert-success'>
        <h2> Danh sách:</h2>
        <ul>
            {
                nvsList.map(item=>{
                    return <li>{item}</li>
                })
            }
        </ul>
        <hr/>
        {nvsElement}
    </div>
  )
}