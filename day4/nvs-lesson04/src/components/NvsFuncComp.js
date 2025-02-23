import React from 'react'

export default function NvsFuncComp(){
    return(
        <div>
            <h2>demo: function component props</h2>
            <p>lấy dữ liệu từ props để hiển thị</p>
            <p>Name:{props.name}</p>
            <p>address:{props.address}</p>
            <p>company:{props.company}</p>
            <p>naote:{props.note}</p>
        </div>
    )
}