import React, { useState } from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import ProjectCard from './ProjectCard';

// --- Project Data ---
// Based on your resume
const projectsData = [
  {
    title: "IPL Score Predictor",
    description: "Developed a model using Python, ML, and DL techniques to analyze match data and forecast scores with improved accuracy.",
    image: "https://placehold.co/600x400/2a2a2a/ffffff?text=ML+Project",
    tags: ["Machine Learning", "Python"],
    liveLink: "https://github.com/Sans-Ai7/IPL-Score-Predictor.git",
    codeLink: "https://github.com/Sans-Ai7/IPL-Score-Predictor.git"
  },
  {
    title: "Pymind Sudoku",
    description: "A Sudoku game developed with Python and Pygame, featuring an interactive UI and logic-based puzzle generation.",
    image: "https://placehold.co/600x400/2a2a2a/ffffff?text=Python+Game",
    tags: ["Python", "Game Development"],
    liveLink: "https://github.com/Sans-Ai7/Pymind_Sudoku.git",
    codeLink: "https://github.com/Sans-Ai7/Pymind_Sudoku.git"
  },
  {
    title: "Resume Website",
    description: "A minimal and responsive web-based resume built with HTML & CSS to showcase my professional details.",
    image: "https://placehold.co/600x400/2a2a2a/ffffff?text=Web+Dev",
    tags: ["Web Dev", "HTML/CSS"],
    liveLink: "https://github.com/Sans-Ai7/My_Resume.git",
    codeLink: "https://github.com/Sans-Ai7/My_Resume.git"
  }
];

// --- Projects Component ---
const Projects = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = projectsData.filter(project =>
    filter === 'All' ? true : project.tags.includes(filter)
  );

  return (
    <Box sx={{ py: 8, px: 2, backgroundColor: 'background.default' }}>
      <Typography variant="h4" align="center" gutterBottom>
        My Projects
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 4 }}>
        <Button variant={filter === 'All' ? 'contained' : 'outlined'} onClick={() => setFilter('All')}>All</Button>
        <Button variant={filter === 'Python' ? 'contained' : 'outlined'} onClick={() => setFilter('Python')}>Python</Button>
        <Button variant={filter === 'Machine Learning' ? 'contained' : 'outlined'} onClick={() => setFilter('Machine Learning')}>Machine Learning</Button>
        <Button variant={filter === 'Web Dev' ? 'contained' : 'outlined'} onClick={() => setFilter('Web Dev')}>Web Dev</Button>
      </Box>
      <Grid container spacing={4} justifyContent="center">
        {filteredProjects.map((project, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;

