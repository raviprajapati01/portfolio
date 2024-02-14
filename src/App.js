import React from 'react';
import { Route, Routes } from 'react-router-dom';
import  Home  from './components/Home/Home';
import  About  from './components/About/About';
import  Project from './components/Project/Project';
import  Skills  from './components/Skills/Skills';
import { Contact } from './components/Contact/Contact';
import { Navbar } from './components/Navbar/Navbar';
import GoHome from './components/GoHome/GoHome';
// import { About } from './components/About/About.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<Project />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <GoHome />
    </div>
  );
}

export default App;
