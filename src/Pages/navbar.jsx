import React from 'react';
import '../App.css';
import logo from '../images/logo.png';

function Navbar() {
    return (
    <>
        <nav>
        <div className="nav-container-1">
          <div className="nav-logo">
            <img src={logo} alt="" width="150" height="150" />
          </div>

          <div className="hero-img">
            <button className="btn-primary"><h4>JOIN</h4></button>
            <button className="btn-primary"><h4>LOGIN</h4></button>
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
