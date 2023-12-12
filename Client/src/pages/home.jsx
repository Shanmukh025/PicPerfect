import React from 'react';
import Content from './content';
import Navbar from './navbar';

const Home = () => {
  return (
    <>
      <div className="container">
        <Navbar/>
        <Content/>
      </div>
    </>
  )
}

export default Home;