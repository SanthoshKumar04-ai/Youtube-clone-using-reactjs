import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-logo">YouTube Clone</div>
            <input type="text" className="search-bar" placeholder="Search..." />
            <div className="navbar-icons">
                <i className="fas fa-video"></i>
                <i className="fas fa-bell"></i>
                <i className="fas fa-user-circle"></i>
            </div>
        </div>
    );
}

export default Navbar;
