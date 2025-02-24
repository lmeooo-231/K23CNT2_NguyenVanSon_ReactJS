import React from 'react';

export default function NvsFuncEvent(){

    //hàm xử lý sự kiện
    const nvsEventButton1Click = ()=>{
        alert("Button 1 - Clicked");
    };

    const nvsEventButton2Click = ()=>{
        alert("Button 2 - Clicked");
    };

    const nvsEventButton3Click = (name)=>{
        alert("Name:"+name)
    }
    return(
        <div className="alert alert">
            <button className='btn btn-primary' onClick={nvsEventButton1Click()}>button1</button>
            <button className='btn btn-primary mx-1' onClick={nvsEventButton2Click}>button2</button>
            <button className='btn btn-success' onClick={nvsEventButton3Click("Sơn Nguyễn")}>button3</button>
            <button className='btn btn-success' onClick={()=>nvsEventButton3Click("Nguyễn Văn Sơn")}>button4</button>
        </div>
    )
}