import React, { Component } from 'react'

export default class DemoState extends Component {
  userName = 'Hello World!';
  state = {//this.state}

    isLogin: false,
  }
  renderLoginTemplate = () => {
    if (this.isLogin) {
      return <a className="nav-link"> Hello {this.userName}</a>
    }
    return (<button
      className="nav-link"
      onClick={(e) => {
        this.handleLogin()
      }}>Sign in</button>)
  }

handleLogin = () => {
  this.isLogin = true;
  let newState ={
    isLogin:true
  }
//this.setstate la phuong thuc bat dong bo chua 2 tham so la state moi va callback (ham) thuc thi sau khi render lai
  this.setState(newState, ()=>{
    console.log(this.state);
  }) // this.setstate la phuong thuc co san cua react component dung de set lai gia tri cua bien state va lafm render lai giao dien 

}

render() {
  return (
    <div classname="container">
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              {/* {this.isLogin ? <a className="nav-link">Hello {this.userName}</a> : <button>Dang Nhap</button>} */}
              {this.renderLoginTemplate()}
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <a className="dropdown-item" href="#">Action 1</a>
                <a className="dropdown-item" href="#">Action 2</a>
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </div>

  )
}
}


