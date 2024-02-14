import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Navbar.css' 
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
    const location = useLocation();
    return (
        <Menu>
            <Link id='home' className={`menu-item ${location.pathname === '/' ? 'active-item' : ''}`} to='/'>
                Home
            </Link>
            <Link id='about' className={`menu-item ${location.pathname === '/about' ? 'active-item' : ''}`} to='/about'>
                About
            </Link>
            <Link id='skills' className={`menu-item ${location.pathname === '/skills' ? 'active-item' : ''}`} to='/skills'>
                Skills
            </Link>
            <Link id='projects' className={`menu-item ${location.pathname === '/projects' ? 'active-item' : ''}`} to='/projects'>
                Projects
            </Link>
            <Link id='contact' className={`menu-item ${location.pathname === '/contact' ? 'active-item' : ''}`} to='/contact'>
                Contact
            </Link>
        </Menu>
    )
}
