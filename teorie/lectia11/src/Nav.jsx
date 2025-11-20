import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className='bg-gray-800 fixed w-full flex space-x-0'>
            <NavLink to="/" className="p-5 text-sm font-medium text-white hover:bg-gray-900">Home</NavLink>        
            <NavLink to="/products" className="p-5 text-sm font-medium text-white hover:bg-gray-900">Products</NavLink>        
            <NavLink to="/contact" className="p-5 text-sm font-medium text-white hover:bg-gray-900">Contact</NavLink>        
            <NavLink to="/about" className="p-5 text-sm font-medium text-white hover:bg-gray-900">About</NavLink>        
            <NavLink to="/dashboard" className="p-5 text-sm font-medium text-white hover:bg-gray-900">Dashboard</NavLink>        
        </nav>
    );
}

export default Nav;
