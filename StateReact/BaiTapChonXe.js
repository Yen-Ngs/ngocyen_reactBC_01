import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {
state ={
    imgSrc:'./img/img/car/products/black-car.jpg'
}
changeColor = (color) => {
    this.setState({
        imgSrc:`./img/img/car/products/${color}-car.jpg`,
    })
}
    render() {
        return (
            <div className="container">
                <div className="row mt-5">
                    <div className="col-6">
                        <img className ="w-100" src ={this.state.imgSrc} />
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-4">
                            <button onClick ={(event)=> {
                                this.changeColor('red');
                            }} className="btn btn-danger">Red Car</button>
                            </div>
                            <div className="col-4">
                            <button onClick ={(event)=> {
                                this.changeColor('black')}} className="btn btn-dark">Black Car</button>
                            </div>
                            <div className="col-4">
                            <button onClick ={(event)=> {
                                this.changeColor('silver')} }className="btn btn-secondary">Silver Car</button>
                            </div>

                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
