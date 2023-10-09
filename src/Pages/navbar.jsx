import React from 'react'
import logo from '../images/logo.jpg'
const Navbar = () => {
  return (
    <>
        <nav>

            <div className="nav-container-1">
            <div className="nav-logo">
              {/* <img src={logo} alt="" /> */}
              <h1>Pic<span>Perfect</span></h1>
            </div>
            
            <div className="hero-img">
              
              <button className='btn-primary'><a href="#">join</a></button>
              <button className='btn-primary'><a href="#">Login</a></button>
              <button className='upload-btn'><a href="#">Upload</a></button>

            </div>
            </div>

            <div className="nav-container-2">
              
              <div className="search-bar">
                <input type="search" placeholder='search PicPerfect' required/>
              </div>
            </div>

        </nav>
    </>
  )
}

export default Navbar