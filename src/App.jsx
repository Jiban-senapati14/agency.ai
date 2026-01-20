import React, { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import TrustedBy from './components/TrustedBy.jsx';
import Services from './components/Services.jsx';
import OurWork from './components/OurWork.jsx';
import Teams from './components/Teams.jsx';
import ContactUs from './components/ContactUs.jsx';
import { Toaster } from 'react-hot-toast';
import Footer from './components/Footer.jsx';
import { useRef, useEffect } from 'react';


const App = () => {


    const dotRef = useRef(null)
    const outLineRef = useRef(null)

    const mouse = useRef({ x: 0, y: 0 }); // Corrected useRef declaration
    const position = useRef({ x: 0, y: 0 })


    useEffect(() => {
        const handleMouseMove = (e) => {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;
        };

        document.addEventListener('mousemove', handleMouseMove);

        const followMouse = () => {
            position.current.x += (mouse.current.x - position.current.x) / 10;
            position.current.y += (mouse.current.y - position.current.y) / 10;

            if (dotRef.current && outLineRef.current) {
                dotRef.current.style.transform = `translate(${mouse.current.x - 6}px, ${mouse.current.y - 6}px)`;
                outLineRef.current.style.transform = `translate(${position.current.x - 20}px, ${position.current.y - 20}px)`;
            }

            requestAnimationFrame(followMouse);
        }

        followMouse(); // Start the animation

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, [])


  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  React.useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return (
    <div className='bg-white dark:bg-black relative min-h-screen'>
      <Toaster />
      <Navbar theme ={theme} setTheme={setTheme} />
      <Hero />
      <TrustedBy />
      <Services />
      <OurWork />
      <Teams />
      <ContactUs />
      <Footer theme={theme} />

      <div ref={outLineRef} className='fixed top-0 left-0 h-10 w-10  border border-primary rounded  rounded-b-full   pointer-events-none z-[9999]' style={{transition: 'transform 0.1s ease-out '}}></div>

      <div ref={dotRef} className='fixed top-0 left-0 bg-blue-700 h-3 w-3 border rounded-b-full   border-primary pointer-events-none z-[9999]'></div>

    </div>


  )
}

export default App
