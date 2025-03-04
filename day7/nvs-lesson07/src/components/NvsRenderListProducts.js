import React, { Component } from 'react';

class NvsRenderListProduct extends Component {
    constructor(props){
        super(props);
        this.state = {
            nvsProducts:[
                {nvsproductid:"P001",nvsproductname:"iphone11", nvsproductquantity:12, nvsprice:"999"},
                {nvsproductid:"P002",nvsproductname:"iphone12", nvsproductquantity:6, nvsprice:"888"},
                {nvsproductid:"P003",nvsproductname:"iphone13", nvsproductquantity:44, nvsprice:"777"},
                {nvsproductid:"P004",nvsproductname:"iphone14", nvsproductquantity:9, nvsprice:"666"},
            ],
        }
    }
    render() {
        let nvsElement = this.state.nvsProducts.map((nvsItem, index)=>{
            return(
                    <tr>
                        <td>{index+1}</td>
                        <td>{nvsItem.nvsproductid}</td>
                        <td>{nvsItem.nvsproductname}</td>
                        <td>{nvsItem.nvsproductquantity}</td>
                        <td>{nvsItem.nvsprice}</td>
                        <td>
                            <button>Sửa</button>
                            <button>Xóa</button>
                        </td>
                    </tr>
            )
        })
        return (
            <div className='alert alert-info'>
                <h2>Danh sách hàng hóa</h2>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>nvsSTT</th>
                            <th>nvsId</th>
                            <th>nvsName</th>
                            <th>nvsAge</th>
                            <th>nvsClass</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {nvsElement}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default NvsRenderListProduct;