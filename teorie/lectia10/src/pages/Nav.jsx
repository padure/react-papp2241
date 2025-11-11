import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className='flex gap-2 bg-amber-700 p-4 text-white'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </nav>
    );
}

export default Nav;
