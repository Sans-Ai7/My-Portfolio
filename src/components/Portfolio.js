import React, { useState, useEffect } from 'react';
import { projects } from '../projectsData';
import ProjectCard from './ProjectCard';
import { Box, Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material';

const Portfolio = () => {
  const [filters, setFilters] = useState({
    Course: false,
    Personal: false,
    FS: false,
    DBMS: false,
  });

  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleFilterChange = (event) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.checked,
    });
  };

  useEffect(() => {
    const activeFilters = Object.keys(filters).filter(key => filters[key]);

    if (activeFilters.length === 0) {
      setFilteredProjects(projects);
      return;
    }

    const newFilteredProjects = projects.filter(p => {
        return activeFilters.some(filter => p.projectType === filter || p.projectDomain === filter);
    });

    setFilteredProjects(newFilteredProjects);
  }, [filters]);


  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4">Projects</Typography>
      <FormGroup row>
        <FormControlLabel control={<Checkbox checked={filters.Course} onChange={handleFilterChange} name="Course" />} label="Course" />
        <FormControlLabel control={<Checkbox checked={filters.Personal} onChange={handleFilterChange} name="Personal" />} label="Personal" />
        <FormControlLabel control={<Checkbox checked={filters.FS} onChange={handleFilterChange} name="FS" />} label="Full Stack" />
        <FormControlLabel control={<Checkbox checked={filters.DBMS} onChange={handleFilterChange} name="DBMS" />} label="DBMS" />
      </FormGroup>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </Box>
    </Box>
  );
};

export default Portfolio;