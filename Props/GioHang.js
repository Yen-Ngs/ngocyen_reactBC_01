import React, { Component } from 'react'

export default class GioHang extends Component {
    render() {
        let {shoppingCart,xoaGioHang} = this.props;
        return (
            <div className="container">
                <div className="text-right">Shopping Cart</div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Photo</th>
                            <th>Price</th>
                            <th>Number</th>
                            <th>Total</th>
                        </tr>
                    </thead> 
                    <tbody>
                        {shoppingCart.map((spGH,index)=>{
                            return <tr key = {index}>
                                <th>{spGH.maSP}</th>
                                <th>{spGH.tenSP}</th>
                                <th><img src={spGH.hinhAnh} width={50} height={50}/></th>
                                <th>{spGH.gia}</th>
                                <th>
                                <button onClick={()=>this.props.tangGiamSoLuong(spGH.maSP,1)} className="btn btn-primary mr-1">+</button>
                                    {spGH.soLuong}
                                    
                                    <button onClick={()=>this.props.tangGiamSoLuong(spGH.maSP,-1)} className="btn btn-primary ml-1">-</button>
                                    </th>
                                <th>{spGH.gia*spGH.soLuong}</th>
                                <th>
                                    <button onClick={()=>xoaGioHang(spGH.maSP)}
                                 className="btn btn-danger">Delete</button>
                                 </th>
                            </tr>
                        })}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="5"></td>
                            <td>Total</td>
                            <td>{this.total()}</td>
                        </tr>
                    </tfoot>
                </table>
                
            </div>
        )
    }
    total=() =>{
        let tongTien = this.props.shoppingCart.reduce((tongTien,spGH,index) =>{
            tongTien +=spGH.soLuong * spGH.gia
            return tongTien;
        },0);
        return tongTien.toLocaleString();
    }
}

