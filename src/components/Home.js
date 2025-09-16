import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';

const Home = () => {
  return (
    <Box sx={{ textAlign: 'center', my: 4, px: 2 }}>
      <Avatar
        alt="Sanskruti Ghadge"
        src="/profile.jpg" // Make sure your photo is in the 'public' folder
        sx={{ width: 150, height: 150, margin: 'auto' }}
      />
      <Typography variant="h3" sx={{ mt: 2 }}>
        Hi, I'm Sanskruti Ghadge
      </Typography>
      <Typography variant="h6" color="text.secondary">
        BCA Student | Tech Enthusiast
      </Typography>
      <Typography variant="body1" sx={{ mt: 2, maxWidth: '700px', mx: 'auto' }}>
        I am a highly motivated BCA student with a passion for software development[cite: 3]. I'm proficient in C++ and Python, with hands-on experience in machine learning and deep learning projects[cite: 4]. I'm eager to contribute my problem-solving skills to a dynamic team in a challenging environment[cite: 5].
      </Typography>
      <Typography variant="h5" sx={{ mt: 4 }}>
        Skills
      </Typography>
      <Typography variant="body1">
        C++ [cite: 15] | Python [cite: 16] | HTML [cite: 16] | CSS [cite: 17] | JavaScript [cite: 18] | SQL [cite: 20] | Machine Learning [cite: 4] | React
      </Typography>
    </Box>
  );
};

export default Home;