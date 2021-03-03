import React, { Component } from 'react'
import KetQuaGame from './KetQuaGame'
import XucXac from './XucXac'
import './BTGame.css'

export default class BTXucXac extends Component {
    render() {
        return (
            <div className="bgGameXucXac">
                <h1 className="text-center">Bai Tap Game Xuc Xac</h1>
                <XucXac/>
                
                <KetQuaGame/>
                
            </div>
        )
    }
}
