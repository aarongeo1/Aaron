import React from 'react';
import { Typography, Grid, Box, Avatar, Container } from '@mui/material';
import Fade from 'react-reveal/Fade';
import Aaron from './images/profil.jpg';
import { motion } from 'framer-motion';
import { styled } from '@mui/system';

const ConveyorBeltContainer = styled('div')({
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  width: '100%',
  position: 'relative',
});
const SkillsContainer = styled(motion.div)({
  display: 'inline-block',
  whiteSpace: 'nowrap',
});

const SkillChip = styled('div')({
  fontFamily: "Orbitron, sans-serif",
  display: 'inline-block',
  padding: '0 7px',
  fontSize: '22px',
  color: 'white',
});

// Framer Motion animation settings
const marqueeVariants = {
  animate: {
    x: [0, -2800],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 100,
        ease: "linear",
      },
    },
  },
};

function AboutSection() {
  const skills = ['Python', 'React.js', 'Node.js', 'MySQL', 'C++', 'Java', 'CSS', 'HTML', 'SQLite', 'AWS','JavaScript', 'TypeScript', 'Git', 'GitHub', 'Docker',  'Cypress','Python', 'React.js', 'Node.js', 'MySQL', 'C++', 'Java', 'CSS', 'HTML', 'SQLite', 'AWS','JavaScript', 'TypeScript', 'Git', 'GitHub', 'Docker',  'Cypress'];
  return (
    <Container id = "About" sx={{ py: 8 }}>
      <Fade bottom>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{ color: 'white', fontWeight: 'bold', mb: 6}}
        >
          / About Me
        </Typography>
        <Grid container spacing={5} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={6} display="flex" justifyContent="center">
            <Box
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: 'transparent',
              }}
            >
              <Avatar src={Aaron} alt="Aaron" variant="rounded" sx={{ width: 275, height: 340, border: '3px solid #777', boxShadow: '0 4px 10px 0 rgba(0,0,0,0.5)' }} />
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <Typography variant="body1" sx={{ color: 'white', textAlign: 'justify', mb: 4 }}>
              I am currently doing my undergrad in BSc Honors Computer Science @ The University of Alberta. I like to learn new technologies and work on projects that challenge me. I am a full stack developer who aspires to be a Machine Learning Engineer in the future. Outside of coding, I like to play video games and play basketball.
            </Typography>
          </Grid>
        </Grid>
        <ConveyorBeltContainer>
          <SkillsContainer
            variants={marqueeVariants}
            animate="animate"
          >
            {skills.map((skill, index) => (
              <SkillChip key={index}>{skill}</SkillChip>
            ))}
            {skills.map((skill, index) => (
              <SkillChip key={`duplicate-${index}`}>{skill}</SkillChip>
            ))}
          </SkillsContainer>
        </ConveyorBeltContainer>
      </Fade>
    </Container>
  );
}

export default AboutSection;
