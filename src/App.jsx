// src/App.jsx
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import { useEffect } from 'react';
import Cursor from './components/cursor';
import Footer from './components/Footer';

function App() {

  useEffect(() => {
    const customCursor = document.getElementById('custom-cursor');
    
    const moveCursor = (e) => {
      if (customCursor) {
        customCursor.style.left = `${e.clientX}px`;
        customCursor.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div className="App">
      <Cursor />
      <Navbar />
      <Hero />
      <main>
        <section id="about">
          <About />
        </section>
        <section id="resume">
          <Resume />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
