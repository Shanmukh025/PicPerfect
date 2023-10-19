import React from 'react';
import logo from "../images/logo.png";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="nav-container-1">
          <div className="nav-logo">
            <img src={logo} alt="" width="150" height="150" />
          </div>

          <div className="hero-img">
            <button className="btn-primary"><a href="#">Join</a></button>
            <button className="btn-primary"><a href="#">Login</a></button>
            <button className="btn upload-btn">
              <label htmlFor="imageInput" className="upload-label">Upload</label>
            </button>
          </div>
        </div>

        <div className="nav-container-2">
        <div class="container">
          <div class="container">
            <input type="text" name="text" class="input" placeholder="Search PicPerfect"/>
          </div>
        </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
