import React, { Component } from 'react'
import {connect} from 'react-redux'

class GioHangRedux extends Component {
    render() {
        console.log(this.props.gioHang,'gioiHang');
        return (
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Number</th>
                            <th>Photos</th>
                            <th>Price</th>
                            <th>Total</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.gioHang.map((spGioHang,index)=>{
                            return<tr  key={index}>
                                <td>{spGioHang.maSP}</td>
                                <td>{spGioHang.tenSP}</td>
                                <td>
                                    <button className="btn btn-primary mr-2" onClick={()=>{this.props.changingNumber(spGioHang.maSP,1)}}>+</button>
                                    {spGioHang.soLuong}
                                    <button className="btn btn-primary ml-2" onClick={()=>{this.props.changingNumber(spGioHang.maSP,-1)}}>-</button>
                                    </td>
                                <td><img style={{width:100}} src={spGioHang.hinhAnh}></img></td>
                                <td>{spGioHang.giaBan}</td>
                                <td>{spGioHang.giaBan*spGioHang.soLuong}</td>
                                <td><button className="btn btn-danger" onClick={()=>this.props.deleteSP(spGioHang.maSP)}>Delete</button></td>

                            </tr>

                        })}

                    </tbody>
                </table>
                
            </div>
        )
    }
}
//ham chuyen state tren redux trow thanh props cua component
// state sẽ đại diện cho rootreducer
const mapStateToProps = (state) =>{
    //tao props tu state redux
    return {
        gioHang:state.gioHangReducer.cart
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        changingNumber:(maSP,soLuong)=>{
            const action ={
                type:'THAY_DOI_SO_LUONG',
                maSP:maSP,
                soLuong:soLuong
            }
            dispatch(action)
        },
        deleteSP:(maSP)=>{
            const action={
                type:'XOA_SAN_PHAM',
                maSP:maSP,
            }
            dispatch(action)
        }
    }
}

//connect between component and redux
export default connect(mapStateToProps,mapDispatchToProps)(GioHangRedux)