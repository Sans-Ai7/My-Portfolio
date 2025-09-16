import React from 'react';
import { Card, CardContent, CardActions, Typography, Button } from '@mui/material';

const ProjectCard = ({ project }) => {
  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      {/* You can add CardMedia for an image here */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {project.description}
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          <strong>Technologies:</strong> {project.technologies.join(', ')}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={project.link} target="_blank">View Project</Button>
        <Button size="small" href={project.code} target="_blank">View Code</Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;