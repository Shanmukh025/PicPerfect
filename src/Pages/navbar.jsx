import React from 'react';
import '../App.css';
import logo from '../images/logo.png';

function Navbar() {
    return (
    <>
        <nav>
        <div className="nav-container-1">
          <div className="nav-logo">
            <img src={logo} width="150" height="150" />
          </div>

          <div className="hero-img">
            <button className="btn-primary"><h3>Join</h3></button>
            <button className="btn-primary"><h3>Login</h3></button>
            <button className="btn upload-btn"><h3>UPLOAD</h3></button>
          </div>
        </div>

        <div className="nav-container-2">
          <div className="container">
            <input type="text" name="text" className="input" placeholder="Search PicPerfect"/>
          </div>
        </div>
      </nav>
    </>
    );
}

export default Navbar;
