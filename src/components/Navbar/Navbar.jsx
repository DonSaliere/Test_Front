import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
    <header className='nav-bar'>
        <NavLink to="/">Главная</NavLink>
        <NavLink to="/news">Новости</NavLink>
        <NavLink to="/profile">Профиль</NavLink>
    </header>
);

export default NavBar;