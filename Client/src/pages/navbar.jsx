import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Navbar() {
    const navigate = useNavigate();
    return (
        <>
           <div className="nav-container">
                <section className="nav-logo">
                    <h3 className="heading1"><a href="#">Logo</a></h3>
                    <h3 className="heading2"><a href="#">Logo</a></h3>
                    <h3 className="heading3"><a href="#">Logo</a></h3>

                </section>
                <section className="nav-menu"></section>
                <section className="settings"></section>
           </div>
        </>
    );
}

export default Navbar;