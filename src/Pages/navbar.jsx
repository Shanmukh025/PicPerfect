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
                        <img src={logo} width="150" height="150" alt="Your Image" onClick={() => { navigate(`/`)}}/>
                    </div>

                    <div className="hero-img">
                        <button className="btn-primary"
                        onClick={() => { navigate(`/join`)}}>
                        <h3>Join</h3>
                        </button>
                        <button className="btn-primary" onClick={() => { navigate(`/login`)}}>
                            <h3>Login</h3>
                            </button>
                        <button className="btn upload-btn"
                        onClick={() => { navigate(`/upload`)}}
                        style={{padding: "10px 35px"}}><h3 style={{ fontWeight: "10px" ,marginRight: "-26px" , marginTop: "3px"}}>UPLOAD</h3>
                            <div style={{ display: 'flex', alignItems: 'initial', justifyContent: 'flex-start', marginTop: '-25px', marginLeft: '-30px'}}>
                               <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" id="camera-plus"><path fill="#000" fill-rule="evenodd" d="M10.2361 5.5C9.66791 5.5 9.14852 5.821 8.89443 6.32918L7.94721 8.22361C7.86252 8.393 7.68939 8.5 7.5 8.5H5C4.17157 8.5 3.5 9.17157 3.5 10V19C3.5 19.8284 4.17157 20.5 5 20.5H19C19.8284 20.5 20.5 19.8284 20.5 19V9.5C20.5 9.22386 20.7239 9 21 9C21.2761 9 21.5 9.22386 21.5 9.5V19C21.5 20.3807 20.3807 21.5 19 21.5H5C3.61929 21.5 2.5 20.3807 2.5 19V10C2.5 8.61929 3.61929 7.5 5 7.5H7.19098L8 5.88197C8.42348 5.03501 9.28914 4.5 10.2361 4.5H13.5C13.7761 4.5 14 4.72386 14 5C14 5.27614 13.7761 5.5 13.5 5.5H10.2361Z" clip-rule="evenodd"></path><path fill="#000" fill-rule="evenodd" d="M12 10.5C10.067 10.5 8.5 12.067 8.5 14 8.5 15.933 10.067 17.5 12 17.5 13.933 17.5 15.5 15.933 15.5 14 15.5 12.067 13.933 10.5 12 10.5zM7.5 14C7.5 11.5147 9.51472 9.5 12 9.5 14.4853 9.5 16.5 11.5147 16.5 14 16.5 16.4853 14.4853 18.5 12 18.5 9.51472 18.5 7.5 16.4853 7.5 14zM16.5 5C16.5 4.72386 16.7239 4.5 17 4.5H21C21.2761 4.5 21.5 4.72386 21.5 5 21.5 5.27614 21.2761 5.5 21 5.5H17C16.7239 5.5 16.5 5.27614 16.5 5z" clip-rule="evenodd"></path><path fill="#000" fill-rule="evenodd" d="M19 7.5C18.7239 7.5 18.5 7.27614 18.5 7L18.5 3C18.5 2.72386 18.7239 2.5 19 2.5C19.2761 2.5 19.5 2.72386 19.5 3L19.5 7C19.5 7.27614 19.2761 7.5 19 7.5Z" clip-rule="evenodd"></path></svg>
                            </div>
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
