import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';

// --- Hero Component ---
// This is the main landing section, featuring an animated background
// and a dynamic typing effect for the introduction.
const Hero = () => {
  // Function to initialize the particles engine
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        overflow: 'hidden', // Prevents scrollbars from the particles animation
      }}
    >
      {/* Animated Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: '#1a1a1a', // A dark background for the particles to stand out
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: 'repulse', // Particles move away from the cursor
              },
              resize: true,
            },
          },
          particles: {
            color: {
              value: '#ffffff',
            },
            links: {
              color: '#ffffff',
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: {
                default: 'bounce',
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          zIndex: -1, // Ensures the particles are in the background
        }}
      />

      {/* Hero Content (Text and Button) */}
      <Box zIndex={1}>
        <Typography variant="h2" component="h1" gutterBottom>
          Sanskruti Ghadge
        </Typography>
        <Typography variant="h5" component="p" sx={{ mb: 4 }}>
          {/* Typing Animation */}
          <TypeAnimation
            sequence={[
              'A BCA Student',
              1000,
              'A Tech Enthusiast',
              1000,
              'A Passionate Developer',
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </Typography>
        {/* Smooth-scrolling Button */}
        <Button
          variant="contained"
          size="large"
          color="primary"
          component={Link}
          to="projects" // This ID must match the section ID in App.js
          smooth={true}
          duration={500}
        >
          View My Work
        </Button>
      </Box>
    </Box>
  );
};

export default Hero;

