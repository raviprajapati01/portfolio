import React from 'react';
import { Header } from '../Header/Header';
import FooterLink from '../Footer/FooterLink';
import conttactVector from './../../assets/contact_anime.png'
import github from './../../assets/gh.png'
import linkedin from './../../assets/li.png'
import instagram from './../../assets/in.png'
import medium from './../../assets/me.png'
import web from './../../assets/web.png'
import './Contact.css';

export const Contact = () => {
    return (
        <div className='section-container'>
            <Header
                heading="Get in touch"
                details="Interested  to collavorate? Feel free to drop me an email"
            />

            {/* Form section  */}
            <div className='contect-form-container'>
                <form className='contact-form'
                    action="https://formspree.io/f/xnqeplzw"
                    method="POST">
                {/* email id input */}
                    <input
                        type='email'
                        placeholder='Your email id'
                        name='email'
                        className='input-box email-input'
                    />

                    {/* email body */}
                    <textarea
                        type='text'
                        placeholder='message'
                        className='input-box body-input'
                    />

                    {/* submit butten */}
                    <button className='contact-btn' type='submit'>
                        Send email
                    </button>
                </form>
            </div>

            {/* socil icon */}
            <div className='socil-icon-contains'>  
            <a href='https://github.com/raviprajapati01'
            className='socil-icon'>
            <img src={github} alt='socil'/>
            </a>

            <a href='https://www.linkedin.com/in/ravi-prajapati-a7529822a/'
            className='socil-icon'>
            <img src={linkedin} alt='socil'/>
            </a>

            <a href='https://www.instagram.com/invites/contact/?i=1784ykp3wwqtt&utm_content=m51qzs9 '
            className='socil-icon'>
            <img src={instagram} alt='socil'/>
            </a>

            <a href='#' className='socil-icon'>
            <img src={medium} alt='socil'/>
            </a>

            <a href='#' className='socil-icon'>
            <img src={web} alt='socil'/>
            </a>

            </div>


            <FooterLink 
                phrase="Read more"
                link="about me!"
                toAddress="/about"
            />

            <div className='vector-frame'>
                <img
                    src={conttactVector}
                    alt='vector'
                    className='about-vecto2'
                />
            </div>
        </div>
    )
}
