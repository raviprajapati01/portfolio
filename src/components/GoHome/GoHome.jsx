import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import homeBlackImg from './../../assets/home_black.png';
import homeWhiteImg from './../../assets/home_white.png';
import './../GoHome/GoHome.css';

const GoHome = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const clickHandler = () => {
        navigate('/portfolio');
    };
    
    const isRootPath = location.pathname === '/portfolio';

    return (
        <button
            className={`go-home-btn ${isRootPath ? 'white-bg' : 'gradient-bg'}`}
            onClick={clickHandler}
        >
            <img 
                className='home-icon'
                src={isRootPath ? homeBlackImg : homeWhiteImg}
                alt='goHome-icon'
            />
        </button>
    );
};

export default GoHome;
