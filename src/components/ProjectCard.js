import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, Button, Chip, Box } from '@mui/material';

const ProjectCard = ({ project }) => {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="200"
        image={project.image}
        alt={project.title}
        onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/2a2a2a/ffffff?text=Image+Not+Found' }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {project.title}
        </Typography>
        <Typography>
          {project.description}
        </Typography>
        <Box sx={{ mt: 2 }}>
          {project.tags.map((tag, index) => (
            <Chip key={index} label={tag} sx={{ mr: 1, mb: 1 }} />
          ))}
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small" href={project.liveLink} target="_blank" rel="noopener noreferrer">
          View Live
        </Button>
        <Button size="small" href={project.codeLink} target="_blank" rel="noopener noreferrer">
          View Code
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;

