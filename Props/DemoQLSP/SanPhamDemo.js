import React, { Component } from 'react'

export default class SanPhamDemo extends Component {
    render() {
        let {sanPham,xemCT} = this.props;
        return (
            <div>
                <div className="card text-left">
                    <img className="card-img-top" style={{height:280}} src={sanPham.hinhAnh} alt={sanPham.hinhAnh} />
                    <div className="card-body">
                        <h4 className="card-title">{sanPham.tenSP}</h4>
                        <p className="card-text">{sanPham.giaBan}</p>
                        <button onClick={()=>{
                            this.props.xemCT(sanPham)
                        }} className="btn btn-success">More Detail</button>
                        <button onClick={()=>{this.props.addShoppingCart(sanPham)}}
                        className="btn btn-danger mx-5" >Shopping Cart</button>
                    </div>
                </div>
            </div>
        )
    }
}
