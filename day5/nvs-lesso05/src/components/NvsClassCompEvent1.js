import React, { Component } from 'react';

class NvsClassCompEvent1 extends Component {
    //hàm xử lý sự kiện
    nvsEvenHandleClick1 = ()=>{
        alert("button 1 clicked");
    }

    nvsEvenHandleClick2 = ()=>{
        alert("button 2 clicked; name="+name);
    }

    render() {
        return (
            <div className='alert alert-danger'>
                <button className='btn btn-primary mx-1' onClick={this.nvsEvenHandleClick1}>button 1</button>
                <button className='btn btn-success mx-1' onClick={this.nvsEvenHandleClick2("Sơn Nguyễn")}>button 2</button>
            </div>
        )
    }
}