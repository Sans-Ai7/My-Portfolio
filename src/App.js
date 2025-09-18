import React from 'react';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

// --- App Component ---
// This component structures the main layout of the single-page application.
function App({ toggleTheme }) {
  return (
    <Box>
      <Navbar toggleTheme={toggleTheme} />
      <main>
        {/* Each section corresponds to a part of the single-page layout */}
        <section id="hero">
          <Hero />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </Box>
  );
}

export default App;
