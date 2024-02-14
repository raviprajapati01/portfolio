import React from 'react';
// import './Navbarh.css';
import { Link, useLocation } from 'react-router-dom';

export const Navbarh = () => {
  const location = useLocation();

  return (
    <ul className='navbar'>
      <li>
        <Link className={`menu-item ${location.pathname === '/' ? 'active-item' : ''}`} to='/'>
          Home
        </Link>
      </li>
      <li>
        <Link className={`menu-item ${location.pathname === '/about' ? 'active-item' : ''}`} to='/about'>
          About
        </Link>
      </li>
      <li>
        <Link className={`menu-item ${location.pathname === '/skill' ? 'active-item' : ''}`} to='/skill'>
          Skills
        </Link>
      </li>
      <li>
        <Link className={`menu-item ${location.pathname === '/project' ? 'active-item' : ''}`} to='/project'>
          Project
        </Link>
      </li>
      <li>
        <Link className={`menu-item ${location.pathname === '/contact' ? 'active-item' : ''}`} to='/contact'>
          Contact
        </Link>
      </li>
    </ul>
  );
};
