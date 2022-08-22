import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Footer from './Footer'
import Contact from './Contact';

const CogIcon =document.getElementById('CogIcon');
console.log(CogIcon);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <Services/>
    <About/>
    <Contact/>
    <Footer/>
  
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
