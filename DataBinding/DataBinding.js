import React, { Component } from 'react'
import style from './DataBinding.module.css'

export default class DataBinding extends Component {
    sinhVien ={
        id:'1',
        ten:'Nguyen Van A'
    }
    renderSinhVien = ()=>{
        return <div>
            id:{this.sinhVien.id} - ten: {this.sinhVien.ten}
        </div>

    }
    render() { //method

        let title = "Cybersoft" //bien
        let sanPham = { //object
            ten: 'IP 5s',
            gia: 1000,
            hinhAnh:'https://picsum.photos/200/200'
        }
        return (
            <div>
  <div>
      <p className={`text-center ${style.textGreen} ${style['txt-light']}`}>abc</p>
      {this.renderSinhVien()}
    <h1>Ho ten: {this.sinhVien.ten}</h1>
    <p style={{backgroundColor:'red',color:'white'}}>aaa</p>
    <p id="title">{title}</p>
    <div classname="card text-white bg-primary w-50">
      <img classname="card-img-top" src={sanPham.hinhAnh} alt />
      <div classname="card-body">
        <h4 classname="card-title">{sanPham.ten}</h4>
        <p classname="card-text">{sanPham.gia}</p>
      </div>
    </div>
  </div>
</div>


        )
    }
}

