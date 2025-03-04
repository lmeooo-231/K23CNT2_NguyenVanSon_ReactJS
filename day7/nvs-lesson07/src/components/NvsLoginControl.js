import React, { Component } from 'react';
import NvsLoginComp from './NvsLoginComp';
import NvsLogoutComp from './NvsLogoutComp';

class NvsLoginControl extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn:false,
        }
    }
    // Hàm xử lý sự kiện login
    nvsHandleLogin = (event)=>{
        event.preventDefault();
        this.setState({
            isLoggedIn:true,
        })
    }
    render() {
        let {isLoggedIn}=this.state
        let nvsElement = isLoggedIn?<NvsLoginComp /> : <NvsLogoutComp />
        return (
            <div className='alert alert-danger'>
                {nvsElement}
                {
                    isLoggedIn? 
                        <button onClick={()=>this.setState({isLoggedIn:false})}>Logout</button> 
                        :<button onClick={this.nvsHandleLogin}>Login</button>
                }
            </div>
        );
    }
}

export default NvsLoginControl;