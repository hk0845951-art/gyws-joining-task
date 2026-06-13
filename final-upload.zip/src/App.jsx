import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import './App.css'
import Slider from "./components/Slider";
import Content from "./components/Content";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";
import Center from "./components/Center";
import Member from "./components/Member";



function App() {


  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Slider />
              <Content />
              
              
            </>
          } />

          <Route path="/Contact" element={<Contact /> }  />
          <Route path="/About" element={<About />} />
          <Route path="/Center" element={<Center />} />
          <Route path="/Member" element={<Member />} />

          

          </Routes >
          <Footer />
      </div>
      </Router >

      )
}

      export default App
