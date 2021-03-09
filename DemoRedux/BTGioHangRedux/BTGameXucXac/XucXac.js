import React, { Component } from 'react'
import './BTGame.css'
import { connect } from 'react-redux'

class XucXac extends Component {
    render() {

        return (
            <div className="container mt-5">
                <div className="row text-center">
                    <div className="col-4">
                        <button style={{ border: 'none' }} className="bg-danger" onClick={() => {this.props.choose('Tai') }}>
                            <div className="p-5 bg-danger text-center text-white w-100 h-100 " style={{ fontSize: 50 }}>
                                TAI
                            </div>
                        </button>

                    </div>
                    <div className="col-4">
                        {this.props.stateGame.map((item, index) => {
                            return <img key={index} src={item.photo} width="50"></img>
                        })}

                    </div>
                    <div className="col-4">
                        <button style={{ border: 'none' }} className="bg-dark" onClick={() => {this.props.choose('Xiu') }}>
                            <div className="p-5 bg-dark text-center text-white w-100 h-100" style={{ fontSize: 50 }}>
                                XIU
                            </div>
                        </button>

                    </div>

                </div>

            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        stateGame: state.BTGameReducer.arr

    }
}//return{}=({}):dev hay xài cái này hơnn return{}


const mapDispatchToProps = (dispatch) => {
    return {
        choose: (giaTri) => {

        const action={
            type: 'YOUR_CHOICE',
            giaTri,

        }
        dispatch(action)
        
        }
    }
}
export default connect(mapStatetoProps, mapDispatchToProps)(XucXac)
