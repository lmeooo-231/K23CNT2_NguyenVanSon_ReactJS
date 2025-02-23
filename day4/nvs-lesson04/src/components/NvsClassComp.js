import React, {Component} from 'react';

class NvsClassComp extends Component {
    constructor(props){
        super(props);
        // khởi tạo props
        this.state = {
            fullname:"Sơn",
            age:20,
            phone:"0123456789"
        }
    }
    {
    //hàm xử lý sự kiện
    chaneInfo = (ev)=>{
        //cập nhật state
        this.setState({
            fullname:"Nguyễn Văn Sơn"
        });
    }
    }
    render(){
        let users = this.props.renderUsers;
        console.log('==================');
        console.log(users);
        console.log('==================');
        return (
            <div className='alert alert-success'>
                <h2>trình bày dữ liệu từ sate</h2>
                <p>info state (fullname): {this.state}</p>
                <p>info state (age): {this.state}</p>
                <p>info state (phone): {this.state}</p>
                <hr/>
                <button className='btn btn-primary' onClick={this.chaneInfo}>change info</button>
                <h3>lấy đữ liệu từ props</h3>
                <p>name:{this.props.renderName}</p>
                <p>fullname:{this.props.renderUser ?this.props.renderUser.fullname:''}</p>
                <p>age:{this.props.renderUser ?this.props.renderUser.age:''}</p>
                <p>phone:{this.props.renderUser ?this.props.renderUser.phone:''}</p>
            </div>
        );
    }
}

export default NvsClassComp;