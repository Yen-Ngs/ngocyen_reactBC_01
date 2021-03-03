import React, { Component } from 'react'

export default class KetQuaGame extends Component {
    render() {
        return (
            <div className="container text-center">
                <div className="display-4">
                    Your Choice: <span className="text-success">TAI</span>
                </div>
                <div className="display-4">
                    Win Game: <span className="text-success">5</span>
                </div>
                <div className="display-4">
                    Number of : <span className="text-success">10</span>
                </div>
                
            </div>
        )
    }
}
