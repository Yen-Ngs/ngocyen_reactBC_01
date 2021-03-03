import React, { Component } from 'react'
import BTProduct from './BTProduct'


export default class BTProductList extends Component {
    arrItem = [
        { maSP: 1, tenSP: 'Black Berry', hinhAnh: './img/sp_blackberry.png', gia: 1000 },
        { maSP: 2, tenSP: 'Iphone X', hinhAnh: './img/sp_iphoneX.png', gia: 2000 },
        { maSP: 3, tenSP: 'Note 7', hinhAnh: './img/sp_note7.png', gia: 3000 },
        { maSP: 3, tenSP: 'Vivo 850', hinhAnh: './img/vivo850.png', gia: 3000 },
    ]
    renderItem = () => {
        const itemList = this.arrItem.map((item,index)=>{
            return <div key ={index} className="col-3">
                <BTProduct sanPham={item}/>
            </div>
        });
        return itemList;
     }
    render() {
        
        return (

            <div className="container-fluid">

                <h1 className="text-white text-center">BEST SMARTPHONE</h1>
                <div className="row">
                    {this.renderItem()}
                    {/* <div className="col-3 ">
                        <BTProduct />
                    </div>
                    <div className="col-3 ">
                        <BTProduct />
                    </div>
                    <div className="col-3 ">
                        <BTProduct />
                    </div>
                    <div className="col-3 ">
                        <BTProduct />
                    </div> */}


                </div>
                <div>
                </div></div>



        )
    }
}
