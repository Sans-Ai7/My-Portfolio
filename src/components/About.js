import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';

const About = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 4 }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ mb: 4 }}>
        About Me
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={4}>
          <img 
            src="/profile.jpg" // Use the same profile picture
            alt="Sanskruti Ghadge" 
            style={{ width: '100%', borderRadius: '8px' }} 
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              I'm a passionate developer based in Mumbai, India.
            </Typography>
            <Typography variant="body1" paragraph>
              As a dedicated BCA student, I have a strong foundation in C++ and Python, with a keen interest in machine learning. My project work in developing an IPL Score Predictor and a Sudoku game has allowed me to apply my analytical and problem-solving skills in practical scenarios.
            </Typography>
            <Typography variant="body1" paragraph>
              I am always eager to learn new technologies and contribute to challenging projects. My goal is to leverage my skills to build innovative and efficient software solutions.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;