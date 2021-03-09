import React, { Component } from 'react'
//library connect to store from component
import {connect} from 'react-redux'

 class KetQuaGame extends Component {
    render() {
        let{stateGame}=this.props;
        return (
            <div className="container text-center">
                <div className="display-4">
                    Your Choice: <span className="text-success">{stateGame.yourChoice}</span>
                </div>
                <div className="display-4">
                    Win Game: <span className="text-success">{stateGame.winGame}</span>
                </div>
                <div className="display-4">
                    Rounds : <span className="text-success">{stateGame.rounds}</span>
                </div>
                <div className="display-4">
                    <button onClick={()=>{
                        const action ={
                            type:'PLAY_GAME',
                        } 
                    this.props.dispatch(action);
                    }}
                    className="btn btn-success "><span className="bg-success w-25 display-4">Play Game</span></button>
                </div>
                
                
            </div>
        )
    }
}

const mapStatetoProps =(state) =>
{
    return{
        stateGame: state.BTGameReducer
    }
}


export default connect(mapStatetoProps)(KetQuaGame)