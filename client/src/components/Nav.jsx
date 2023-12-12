import React from 'react'

const Nav = () => {
  return (
    <>
        <div className="nav-container">
            <section className="nav-logo">
                <h3 className="heading">Logo</h3>
            </section>
            <section className="nav-profile">
                <input type="search" className='search-input' placeholder='search & `press enter`'/>
                <button className="login-btn">Get Started</button>
                <span className='profile'></span>
            </section>
        </div>
    </>
  )
}

export default Nav