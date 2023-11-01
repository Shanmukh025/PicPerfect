import React from 'react';
import { useNavigate } from 'react-router-dom';


const Join = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className="join-container">
      <div className="join-title">Registration</div>
      <div className="user-details">
        <div className="input-box">
          <span className="details">Full Name</span>
          <input type="text" placeholder="Enter your name" required />
        </div>
        <div className="input-box">
          <span className="details">Username</span>
          <input type="text" placeholder="Enter your username" required />
        </div>
        <div className="input-box">
          <span className="details">Email</span>
          <input type="text" placeholder="Enter your email" required />
        </div>
        <div className="input-box">
          <span className="details">Phone Number</span>
          <input type="text" placeholder="Enter your number" required />
        </div>
        <div className="input-box">
          <span className="details">Password</span>
          <input type="text" placeholder="Enter your password" required />
        </div>
        <div className="input-box">
          <span className="details">Confirm Password</span>
          <input type="text" placeholder="Confirm your password" required />
        </div>
      </div>
      <div className="join-input-box " onClick={() => { navigate(`/login`)}}>
          <input type="button" value="JOIN PICPERFECT" />
        </div>
    </div>
    </>
  );
}

export default Join;
