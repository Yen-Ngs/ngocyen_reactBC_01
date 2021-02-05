import React, { Component } from 'react'
import SinhVien from './SinhVien'

export default class  extends Component {
    mangSinhVien =[
        {ma:1, ten:'Nguyen Van A'},
        {ma:2, ten:'Nguyen Van B'},
        {ma:3, ten:'Nguyen Van C'},
    ]
    renderSinhVien = () =>{
        const result = this.mangSinhVien.map((sv,index) =>{
                return <div className="col-4" key={index}>
                    <SinhVien sinhVien ={sv}/>
                </div>
        });
        return result;
    }
    render() {
        

        return (

            <div className="container">
                <h3 className="text-center display-4">Thong tin Sinh Vien</h3>
                <div className="row">
                    <div className="col-4">
                        <SinhVien sinhVien= {this.mangSinhVien[0]}/>
                    </div>
                    <div className="col-4">
                        <SinhVien sinhVien= {this.mangSinhVien[1]}/>
                    </div>
                    <div className="col-4">
                        <SinhVien sinhVien= {this.mangSinhVien[2]}/>
                    </div>
                </div>
            </div>
        )
    }
}
