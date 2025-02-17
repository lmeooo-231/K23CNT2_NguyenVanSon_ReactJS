import React from 'react'

export default function NvsjsxExpression(){
    // biến
    const name="Nguyễn Văn Sơn";
    // biến đối tượng
    const user = {
        firstname:"Sơn",
        lastname:"Nguyễn"
    }
    // hàm 
    const fullname=(user)=>{
        return user.firstname+ ' ' + user.lastname;
    }

    // element
    const element =(
        <div>
            {/* biểu thức jsx */}
            <h2>{fullname(user)}</h2>
            <hr/>
            <h3>welcome to, {name}</h3>
        </div>
    );
    // ham
    const sayWelcome = (name)=>{
        if(name){
            return <h3>Welcome to {name}</h3>
        }else{
            return <h3>Welcome to Ft-NTU-K23CNT2</h3>
        }
    }
    return(
        <div>
            <h1> NVS - JSX Expression</h1>
            {/*sử dụng biến element*/}
            {element}
            <hr/>
            {sayWelcome()}
            <hr/>
            {sayWelcome("hmmmm")}
        </div>
    )
}
