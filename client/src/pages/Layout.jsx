import React from 'react'
import Nav from '../components/Nav'
import Menu from '../components/Menu'


const Layout = () => {
  return (
    <>
        <Nav />
        <div className="container">
          <Menu />
        </div>
    </>
  )
}

export default Layout