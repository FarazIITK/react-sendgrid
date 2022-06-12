import React from 'react';
import './Styles/App.scss';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Components/Home';
import Services from './Components/Services';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
