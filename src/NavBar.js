// NavBar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    return (
        <nav className="navbar">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/profile/1" className="nav-link">My Profile</Link> {/* replace 1 with the actual id */}
            <Link to="/members" className="nav-link">Members</Link>
        </nav>
    );
}

export default NavBar;
