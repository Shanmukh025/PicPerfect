import React from 'react'

const Menu = () => {
  return (
    <>
        <div className="menu-container">
            <ul className="nav-list">
                <li><a href="#" className="nav-link"><i className="uil uil-estate"></i>Home</a></li>
                <li><a href="#" className="nav-link"><i className="uil uil-image"></i> Images</a></li>
                <li><a href="#" className="nav-link"><i className="uil uil-video"></i> Videos</a></li>
                <li><a href="#" className="nav-link"><i className="uil uil-heart"></i> Favourites</a></li>
                <li><a href="#" className="nav-link"><i className="uil uil-apps"></i> Collections</a></li>
            </ul>
        </div>
    </>
  )
}

export default Menu