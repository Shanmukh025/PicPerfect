import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/logo.png";

const Home = () => {
  return (
    <div>
      <nav>
      <div className="nav-container-1">
          <div className="nav-logo">
            <img src={logo} alt="" width="150" height="150" />
          </div>

          <div className="hero-img">
            <button className="btn-primary">Join</button>
            <button className="btn-primary">Login</button>
            <Link to="/upload" className="btn upload-btn">Upload</Link>
          </div>
        </div>

        <div className="nav-container-2">
          <div className="container">
            <input type="text" name="text" className="input" placeholder="Search PicPerfect"/>
          </div>
        </div>
      </nav>

      <header>
        <section>
          <p>Welcome to the Home Page</p>
          <Link to="/upload">Upload Page</Link>
        </section>
      </header>
    </div>
  );
}

export default Home;
