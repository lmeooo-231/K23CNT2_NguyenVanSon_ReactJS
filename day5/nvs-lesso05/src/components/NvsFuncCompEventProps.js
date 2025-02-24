import React from 'react';

export default function NvsFuncCompEventProps(nvsProps){
    //hàm xử lý sự kiện
    const nvsHandleButtonClick1= ()=>{
        alert("dữ liệu từ props:" + nvsProps.nvsRenderName);
        console.log("xin chào:",nvsProps.nvsRenderName);
    }
    const nvsHandleButtonClick2 = (param)=>{
        //lấy dữ liệu từ props
        alert("dữ liệu từ props (Button 2 click):" + nvsProps.nvsRenderName);
        console.log('==================');
        console.log("hi:",param);
        console.log('==================');
    }
    return(
        <div className='alert alert-info'>
            <button className='btn btn-primary mx-1'
            onClick={nvsHandleButtonClick1}>button1</button>
            <button className='btn btn-success'
            onClick={()=>nvsHandleButtonClick2("button 2")}>button 2</button>
        </div>
    )
}
