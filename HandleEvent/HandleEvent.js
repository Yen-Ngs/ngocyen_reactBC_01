import React, { Component } from 'react'

export default class HandleEvent extends Component {

    handleClick = ()=>{
        alert('hello BC01');
    }
    showMessage =(name) =>{
        alert('hello' +name)
    }
    render() {
        
        return (
            <div>
                <button className="btn btn-success" onClick={this.handleClick}>Click me!</button>

                <button id ="btnClickMe" className="btn btn-success" onClick={this.showMessage.bind(this,"Si")}>Show Message</button>

                {/* cach 2: truyen ham nac danh */}
                <button onClick={(event)=>{
                    this.showMessage('Phu')

                }
                
                }>Show Mess</button>
            </div>
        )
    }
}
