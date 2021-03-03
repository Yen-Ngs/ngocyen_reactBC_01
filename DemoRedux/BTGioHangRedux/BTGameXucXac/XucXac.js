import React, { Component } from 'react'
import './BTGame.css'

export default class XucXac extends Component {
    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-4">
                        <button style={{border:'none'}} className="bg-danger">
                            <div className="p-5 bg-danger text-center text-white w-100 h-100 style={{font-size:50}} m-10">
                                TAI
                            </div>
                        </button>

                    </div>
                    <div className="col-4">
                        <img src="{'../img2/1.png'}"></img>
                        <img src="{'../img2/2.png'}"></img>
                        <img src="{'../img2/3.png'}"></img>
                    </div>
                    <div className="col-4">
                        <button style={{border:'none'}} className="bg-danger">
                            <div className="p-5 bg-danger text-center text-white w-100 h-100 style={{font-size:50}}">
                                XIU
                            </div>
                        </button>

                    </div>

                </div>
                
            </div>
        )
    }
}

