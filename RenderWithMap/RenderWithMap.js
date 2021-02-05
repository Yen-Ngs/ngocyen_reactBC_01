import React, { Component } from 'react'

export default class RenderWithMap extends Component {
    mangSinhVien = [
        {ma:1, ten: 'Nguyen Van A'},
        {ma:2, ten: 'Nguyen Van B'},
        {ma:3, ten: 'Nguyen Van C'},
    ]
    renderSinhVien  = ()=>{
        // const arrJSX =[];
        // for (index=0; index=this.mangSinhVien.length;index++){
        //     let tagP = <p key={index}>{this.mangSinhVien[index].ten}</p>;
        //     arrJSX.push(tagP);

        // }
        // console.log(arrJSX);
        // return arrJSX;
        const arrJSX = this.mangSinhVien.map((sinhVien,index) => {
                return <li key ={index}>
                    {sinhVien.ten}
                </li>
        });
        return arrJSX
     }
    render() {
        return (
            <div class="container">
                <ul>
                    {this.renderSinhVien()}

                </ul>
                <thead>
                    <tr>
                        <th>Ma Sinh Vien</th>
                        <th>Ten Sinh Vien</th>
                    </tr>
                </thead>
                <tbody>
                    {this.mangSinhVien.map = ((sinhVien,index) => {
                        return <tr key = {index}>
                            <td>{sinhVien.ten}</td>
                            <td>{sinhVien.ma}</td>
                            <td><button className="btn btn-danger">Xoa</button></td>
                        </tr>
                    })}
                </tbody>

            </div>
                
        )
    }
}
