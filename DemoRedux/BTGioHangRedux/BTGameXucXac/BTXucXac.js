import React, { Component } from 'react'
import KetQuaGame from './KetQuaGame'
import XucXac from './XucXac'
import './BTGame.css'
import {connect} from 'react-redux'

class BTXucXac extends Component {
    
    renderResult=()=>{
        return <h1 className="text-center text-secondary">{this.props.total}-{this.props.result}</h1>


    }
    render() {
        return (
            <div className="bgGameXucXac">
                <h1 className="text-center">Bai Tap Game Xuc Xac</h1>
                <XucXac/>
                {this.renderResult()}
                <KetQuaGame/>
                
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    let arrDice = state.BTGameReducer.arr;
    let total= arrDice.reduce((td,dice,index)=>{
        return td +=dice.point
    },0)
    let result = total >=11? 'Tai':'Xiu';
    return{
        total:total,
        result:result
    
    }
}

export default connect (mapStateToProps)(BTXucXac)