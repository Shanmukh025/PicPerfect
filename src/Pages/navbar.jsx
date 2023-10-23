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
            <button className="btn-primary">Join</button>
            <button className="btn-primary">Login</button>
            <button to="/upload" className="btn upload-btn">Upload</button>
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
