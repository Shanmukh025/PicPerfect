import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component from react-router-dom

const Login = () => {
  return (
    <div className="login-container">
      <form action="#">
        <div className="login-title">Login</div>
        <div className="login-input-box login-underline">
          <input type="text" placeholder="Enter Your Email" required />
          <div className="login-underline"></div>
        </div>
        <div className="login-input-box">
          <input type="password" placeholder="Enter Your Password" required />
          <div className="login-underline"></div>
        </div>
        <div className="login-input-box login-button">
          <Link to="/">
            <input type="submit" name="submit" value="LOGIN" />
          </Link>
        </div>
      </form>
      <div className="login-option">
        or <Link to="/join">Join PicPerfect</Link>
      </div>
    </div>
  );
};

export default Login;
