import React from 'react';
import { Header } from '../Header/Header';
import aboutVector from './../../assets/about_vector.png';
import './About.css';
import FooterLink from '../Footer/FooterLink';
import rightImg from './../../assets/about_anime.gif';

 const About = () => {
  return (
    <div className='section-container'>
      <Header 
        heading='About Me'
        details='Discovering My Journey A Personal Insight '
      />

      <div className='main-container'>
          <div className='left-part'>
          {/*sub heading1 */}
              <h3 className='sub-heading'>Student</h3>
              <p className='sub-containt'>"As a B.Tech student, I am deeply passionate about programming and web development.
               I've dedicated my time to mastering Data Structure and web developer skills"
                  <a className='contain-link' href='#'></a>
              </p>
              {/* sub heading2 */}
              <h3 className='sub-heading'>Full Stack Developer</h3>
              <p className='sub-containt'>"As a Full Stack Developer, I specialize in both front-end and back-end development. From designing user interfaces to managing server-side logic, 
              I am dedicated to crafting seamless experiences across the digital landscape" <a className='contain-link' href='#'></a>
              </p>
              {/* sub heading3 */}
              <h3 className='sub-heading'>More about me!</h3>
              <p className='sub-containt'> "I am a dedicated software engineer with a passion for coding and
               problem-solving. Throughout my career, I've actively participated in numerous coding competitions
               , honing my skills and staying abreast of industry trends. Beyond my professional pursuits, I find joy in playing cricket and volleyball, 
              finding that physical activity enhances my mental acuity and creativity. I am eager to explore new challenges and make impactful contributions to the tech community." 
              <a className='contain-link' href='#'></a>
              </p>
          </div>
          <div className='right-part'>
            <img src={rightImg} className='anime' alt=''
            />
          </div>
      </div>


      <FooterLink 
        phrase="Check out my"
        link="projects!"
        toAddress="/projects"
      />

      <div className='vector-frame'>
        <img 
          src={aboutVector} 
          className='about-vector' 
          alt='about'
        />
      </div>
    </div>
  );
};

export default About;
