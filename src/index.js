import React from 'react';
import ReactDOM from 'react-dom/client';
import AOS from 'aos';
import './index.css';
import 'aos/dist/aos.css';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { peticion } from './data/strapiTest';


import Header from './components/Header/Header';
import Hero from './layouts/Hero/Hero';
import About from './layouts/About/About';
import Tech from './layouts/Tech/Tech';
import Projects from './layouts/Projects/Projects';
import Contact from './layouts/Contact/Contact';
import Footer from './components/Footer/Footer';
import Posts from './components/Blog/Posts';

AOS.init({
  duration: 1000,
  offset: 100,
  delay: 500
});

gsap.registerPlugin(ScrollTrigger);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Hero/>
    <About/>
    <Tech/>
    <Projects/>
    {
      //peticion()
    }
    <Contact/>
    <Footer/>
  </React.StrictMode>
);