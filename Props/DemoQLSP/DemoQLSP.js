import React, { Component } from 'react'
import GioHang from '../GioHang'
import SanPhamDemo from './SanPhamDemo'

export default class DemoQLSP extends Component {
    state = {
        itemDetail: {
            "maSP": 1,
            "tenSP": "VinSmart Live",
            "manHinh": "AMOLED, 6.2\", Full HD+",
            "heDieuHanh": "Android 9.0 (Pie)",
            "cameraTruoc": "20 MP",
            "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 5700000,
            "hinhAnh": "./img1/sp_iphoneX.png"

        },
        shoppingCart: [
            { maSP: 1, hinhAnh: './img1/sp_iphoneX.png', tenSP: 'Iphone', gia: 1000, soLuong: 1 }
        ]
    }
    arrProduct =
        [
            {
                "maSP": 1,
                "tenSP": "VinSmart Live",
                "manHinh": "AMOLED, 6.2\", Full HD+",
                "heDieuHanh": "Android 9.0 (Pie)",
                "cameraTruoc": "20 MP",
                "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
                "ram": "4 GB",
                "rom": "64 GB",
                "giaBan": 5700000,
                "hinhAnh": "./img1/vsphone.jpg"
            },

            {
                "maSP": 2,
                "tenSP": "Meizu 16Xs",
                "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels",
                "heDieuHanh": "Android 9.0 (Pie); Flyme",
                "cameraTruoc": "20 MP",
                "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
                "ram": "4 GB",
                "rom": "64 GB",
                "giaBan": 7600000,
                "hinhAnh": "./img1/meizuphone.jpg"
            },

            {
                "maSP": 3,
                "tenSP": "Iphone XS Max",
                "manHinh": "OLED, 6.5\", 1242 x 2688 Pixels",
                "heDieuHanh": "iOS 12",
                "cameraSau": "Chính 12 MP & Phụ 12 MP",
                "cameraTruoc": "7 MP",
                "ram": "4 GB",
                "rom": "64 GB",
                "giaBan": 27000000,
                "hinhAnh": "./img1/applephone.jpg"
            }
        ]
    //Hàm xử lý làm thay đổi state sẽ được đặt tại component chứa state
    addShoppingCart = (sanPhamClick) => {
        let spGH = {
            maSP: sanPhamClick.maSP,
            tenSP: sanPhamClick.tenSP,
            gia: sanPhamClick.giaBan,
            soLuong: 1,
            hinhAnh: sanPhamClick.hinhAnh
        }
        let gioHangUpdate = [...this.state.shoppingCart];
        //xử lý ktra state nếu có chứa dữ liệu sản phẩm đó khi click hay chưa => nếu có thì tăng số lượng, nếu chưa thì thêm vào 
        let indexSPGH = gioHangUpdate.findIndex(sp => sp.maSP === sanPhamClick.maSP);
        if (indexSPGH !== -1) {
            gioHangUpdate[indexSPGH].soLuong += 1;
        } else {
            gioHangUpdate.push(spGH)
        }

        this.state.shoppingCart.push(spGH);
        console.log(sanPhamClick);
        this.setState({
            shoppingCart: gioHangUpdate
        })
    }
    renderProduct = () => {
        return this.arrProduct.map((sanPham, index) => {
            return <div key={index} className="col-4">
                <SanPhamDemo sanPham={sanPham} xemCT={this.xemChiTiet}
                    addShoppingCart={this.addShoppingCart} />
                {/* <div className="card text-left">
                    <img className="card-img-top" style={{height:300}} src={sanPham.hinhAnh} alt={sanPham.hinhAnh} />
                    <div className="card-body">
                        <h4 className="card-title">{sanPham.tenSP}</h4>
                        <p className="card-text">{sanPham.giaBan}</p>
                        <button onClick={() => { 
                            this.xemChiTiet(sanPham);
                        }} className="btn btn-success">More Detail</button>
                    </div>
                </div> */}
            </div>
        });
    }
    xemChiTiet = (sanPhamClick) => {
        console.log(sanPhamClick);
        this.setState({
            itemDetail: sanPhamClick
        })

    }
    tangGiamSoLuong = (maSP, soLuong) => {
        let gioHangUpdate = [...this.state.shoppingCart]
        // step 1: find product in the cart depend on ID 
        let index = gioHangUpdate.findIndex(spGH => spGH.maSP === maSP)

        //step2: increase number of product 
        if (index !== -1) {
            
            gioHangUpdate[index].soLuong += soLuong;
            if(gioHangUpdate[index].soLuong<=0){
                alert(' The Number of the product is not allowed!')
                gioHangUpdate[index].soLuong -= soLuong;
                return;
            }
            
        }

        //step3: setState for shoppingCart
        this.setState({
            shoppingCart: gioHangUpdate,
        })
    }
    xoaGioHang = (maSP) => {
        var gioHangUpdate = this.state.shoppingCart.filter(sp => sp.maSP !== maSP)
        alert('Want to Delete?');
        this.setState({
            shoppingCart: gioHangUpdate
        })

    }
    render() {
        let { hinhAnh, manHinh, heDieuHanh, cameraSau, cameraTruoc, ram, tenSP } = this.state.itemDetail;

        return (
            <div className="container">
                <h2 className="mt-2">Shopping Cart</h2>
                <GioHang tangGiamSoLuong={this.tangGiamSoLuong} shoppingCart={this.state.shoppingCart} xoaGioHang={this.xoaGioHang} />
                <h1 className="display-5 text-center">Product List</h1>
                <div className="row">
                    {this.renderProduct()}


                </div>
                <div className="row mt-5">
                    <div className="col-4">
                        <h3>{tenSP}</h3>
                        <img className="card-img-top" style={{ height: 300 }} src={hinhAnh} alt={hinhAnh} />

                    </div>
                    <div className="col-8">
                        <h3>Detail</h3>
                        <table className="table">

                            <thead>
                                <tr>
                                    <th>Screen</th>
                                    <th>{manHinh}</th>
                                </tr>
                                <tr>
                                    <th>System</th>
                                    <th>{heDieuHanh}</th>
                                </tr>
                                <tr>
                                    <th>Front Cam</th>
                                    <th>{cameraTruoc}</th>
                                </tr>
                                <tr>
                                    <th>Behind Cam</th>
                                    <th>
                                        {cameraSau}
                                    </th>
                                </tr>
                                <tr>
                                    <th>Ram</th>
                                    <th>{ram}</th>
                                </tr>
                            </thead>
                        </table>
                    </div>


                </div>

            </div>
        )
    }
}
