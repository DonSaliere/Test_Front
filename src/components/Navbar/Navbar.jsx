import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => (
    <header className='nav-bar'>
        <NavLink to="/profile">Профиль</NavLink>
        <NavLink to="/login">Логин</NavLink>
    </header>
);

export default NavBar;