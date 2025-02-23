import React from 'react'

export default function NvsFuncComp1(props){
    return(
        <div>
            <h2>props is object</h2>
            <p><b>info:</b></p>
            <p>fullname:{props.renderinfo.fullname}</p>
            <p>age:{props.renderinfo.age}</p>
            <p>phone:{props.renderinfo.phone}</p>
        </div>
    )
}