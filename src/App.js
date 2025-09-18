import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Box, ThemeProvider, CssBaseline } from '@mui/material';
import { ThemeContext, lightTheme, darkTheme } from './theme';

function App() {
  const [mode, setMode] = useState('light');

  const theme = useMemo(() => (mode === 'light' ? lightTheme : darkTheme), [mode]);

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    // The ThemeContext makes the 'mode' and 'toggleTheme' function available to children (like the Navbar)
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      {/* The ThemeProvider applies the actual MUI styles */}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box>
          <Navbar />
          <section id="hero">
            <Hero />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;

