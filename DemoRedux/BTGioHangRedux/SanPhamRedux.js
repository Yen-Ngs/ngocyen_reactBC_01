import React, { Component } from 'react'
//connect redux
import {connect} from 'react-redux'

class SanPhamRedux extends Component {
    render() {
        let {sanPham} = this.props;
        return (
            <div>
                <div className="card text-left">
                    <img className="card-img-top" style={{height:280}} src={sanPham.hinhAnh} alt={sanPham.hinhAnh} />
                    <div className="card-body">
                        <h4 className="card-title">{sanPham.tenSP}</h4>
                        <p className="card-text">{sanPham.giaBan}</p>
                        <button onClick={()=>{this.props.addShoppingCart(sanPham)}}
                        className="btn btn-danger mx-5" >Shopping Cart</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{

    }
}
//ham de create props la ham de xu ly event render data len redux

const mapDispatchToProps = (dispatch)=>{
    return{
        addShoppingCart: (sanPhamClick)=>{
            console.log('sp dc Click', sanPhamClick);
            //tao ra spGioHang tu spClick
            const spGioHang={
                ...sanPhamClick,
                soLuong:1
            }
             // push data to redux store
             const action ={
                 type:'THEM_GIO_HANG',//thuoc tinh bat buoc khi gui du lieu len redux
                 spGioHang:spGioHang
             }
             //dung ham dispatch dua data len reducer (redux store)
             dispatch(action);
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SanPhamRedux)