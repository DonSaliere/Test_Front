import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => (
    <header className='nav-bar'>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/login">Login</NavLink>
    </header>
);

export default NavBar;