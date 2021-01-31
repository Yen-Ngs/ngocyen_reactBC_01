import React, { Component } from 'react'

export default class BTProduct extends Component {
    render() {
        return (
<div>
  <div classname="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
    <div classname="container">
      <div classname="card bg-light" style={{width: 300}}>
        <img classname="card-img-top" src="./img/lt_lenovo.png" alt="Card image" style={{maxwidth: '100%', height: 250}} />
        <div classname="card-body text-center">
          <h4 classname="card-title text-center">LENOVO THINKPAD</h4>
          <p classname="card-text">The ThinkPad X1 Carbon is a high-end notebook computer released by Lenovo in 2012</p>
          <a href="#" classname="btn btn-primary">Detail</a>
          <a href="#" classname="btn btn-danger">Cart</a>
        </div>
      </div>
    </div>
  </div>
</div>


        )
    }
}
