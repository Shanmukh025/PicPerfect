import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import logo from '../images/logo.png';

function Navbar() {
    const navigate = useNavigate();
    return (
        <>
            <nav>
                <div className="nav-container-1">
                    <div className="nav-logo">
                        <img src={logo} width="150" height="150" alt="Your Image" />
                    </div>

                    <div className="hero-img">
                        <button className="btn-primary">
                            <h3>Join</h3>
                        </button>
                        <button className="btn-primary">
                            <h3>Login</h3>
                        </button>
                        <button className="btn upload-btn" onClick={()=> {navigate(`/upload`)}}>
                            <h3>UPLOAD</h3>
                        </button>
                    </div>
                </div>

                <div className="nav-container-2">
                    <div className="container">
                        <input type="text" name="text" className="input" placeholder="Search PicPerfect" />
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
