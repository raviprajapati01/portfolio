import React from 'react';
import { useNavigate } from 'react-router-dom';
import homeBgImg from './../../assets/home_anime.gif';
import './../Home/Home.css';

 const Home = () => {
    let navigate = useNavigate();
    const clickHandler1 = () => {
        navigate('/about');
    };
    const clickHandler2 = () => {
        navigate('/contact');
    };

    return (
        <div className='home-scn'>
            <h1 className='title'>Welcome to my Portfolio Website</h1>
            <h4 className='subTitle'>I'm Ravi Prajapati, a full stack developer.</h4>

            <div className='btn'>
                <button onClick={clickHandler1} className='btn1'>Know more about me</button>
                <button onClick={clickHandler2} className='btn2'>Contact me</button>
            </div>
            <img 
                className='home-img'
                src={homeBgImg}
                alt="HomeBgImg"
                width={450}
            />
        </div>
    )
}

export default Home;
