import React, { Component } from 'react'

export default class SinhVien extends Component {
    render() {
        let{ten,tuoi,ma}=this.props.sinhVien;
        let{sinhVien}=this.props;
        return (
            <div className="card text-white bg-dark">
  <img width={100} height={150} className="card-img-top" src="https/picsum/photos/100/180" alt="abc" />
  <div className="card-body">
    <h4 className="card-title">{sinhVien?.ma}</h4>
    <p className="card-text">{sinhVien?.ten}</p>
  </div>
</div>

        )
    }
}
// state khác props chỗ nào 
//đều để binding dữ liệu lên giao diện đèue là thuộc tính có sẵn của react class components
//state quản lý các trạng thái của biến và thay đổi giao diện

// props nhận giá trị component của cha truyền vào 
//state có thể gán lại giá trị vào( gọi phương thức setstate) nhưung props hk đc 
//? la toan tu optional