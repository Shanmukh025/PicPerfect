import React from 'react';
import logo from "../images/logo.png";

const Navbar = () => {
  return (
    <>
        <nav>

            <div className="nav-container-1">
            <div className="nav-logo">
              {<img src={logo} alt="" width="150" height="150"/> }
            </div>
            
            <div className="hero-img">
              <button className='btn-primary'><a href="#">Join</a></button>
              <button className='btn-primary'><a href="#">Login</a></button>
              <button class="btn upload-btn">
    <label for="imageInput" class="upload-label">Upload</label>
    <input type="file" id="imageInput" class="upload-input" accept="image/*"/>
  </button></div>
            </div>

            <div className="nav-container-2">
              
              <div className="search-bar">
                <input type="search" placeholder='Search PicPerfect' required/>
              </div>
            </div>

        </nav>
    </>
  )
}

export default Navbar