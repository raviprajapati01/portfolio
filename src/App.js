import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Project from './components/Project/Project';
import Skills from './components/Skills/Skills';
import {Contact} from './components/Contact/Contact';
import {Navbar} from './components/Navbar/Navbar';
import GoHome from './components/GoHome/GoHome';

function App() {
  return (
    <div className="app">
      <BrowserRouter >
        <Navbar />
        <Routes>
          <Route exact path="/portfolio" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <GoHome /> {/* GoHome should also be rendered within BrowserRouter */}
      </BrowserRouter>
    </div>
  );
}

export default App;
