import React, { Component } from 'react';

class NvsClassCompEventProps extends Component {
    //hàm xử lý dữ liệu
    nvsEventHandleClick1=()=>{
        alert("hello..."+this.props.nvsRenderTitle);
    }
    render() {
        return(
            <div className='alert alert-danger'>
                <button className='btn btn=primary'
                onClick={this.nvsEventHandleClick1}>button1</button>
            </div>
        );
    }
}

export default NvsClassCompEventProps;