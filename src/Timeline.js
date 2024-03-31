import React, { useState } from 'react';
import { Container, Typography, Button, Grid, Paper, List, ListItem, ListItemText, useTheme, useMediaQuery } from '@mui/material';
import { IoCodeWorking } from 'react-icons/io5';
import { Fade, Zoom } from 'react-reveal';

const experiences = [
    {
    id: 1,
    title: "Full Stack Developer",
    subtitle: "uniONE",
    date: "January 2022 - April 2024",
    description: [
      "Assist in grading CMPUT 291 coursework, ensuring fair and timely evaluation of assignments.",
      "Provide comprehensive academic support to students.",
      "Assist in the development and enhancement of course materials."
    ],
    icon: <IoCodeWorking />,
  },
  {
    id: 2,
    title: "Computer Engineer Intern",
    subtitle: "Castle Rock Research Corporation",
    date: "January 2024 - present",
    description: [
      "Create a custom GPT model and integrate OpenAI's GPT API into Solaro's platform, leveraging Python and Flask.",
      "Conduct extensive testing, debugging, and optimization to enhance the chat tutor responses.",
      "Implement an AI-driven chat tutor, significantly aiding students with personalized academic support."
    ],
    icon: <IoCodeWorking />,
  },

  {
    id: 3,
    title: "Teaching Assistant",
    subtitle: "University Of Alberta",
    date: "September 2023 - January 2024",
    description: [
      "Assist in grading CMPUT 291 coursework, ensuring fair and timely evaluation of assignments.",
      "Provide comprehensive academic support to students.",
      "Assist in the development and enhancement of course materials."
    ],
    icon: <IoCodeWorking />,
  },
  {
    id: 4,
    title: "Full Stack Intern",
    subtitle: "Cove",
    date: "May 2023 - August 2023",
    description: [
      "Develop and maintain front-end and back-end features of Cove's web and mobile applications.",
      "Collaborate with cross-functional teams to ensure seamless user experiences and application performance.",
      "Write clean, efficient, and well-documented code adhering to industry standards and best practices.",
      "Identify and troubleshoot bugs, performance bottlenecks, and technical issues.",
      "Continuously learn and stay up-to-date with the latest technologies and frameworks."
    ],
    icon: <IoCodeWorking />,
  },
  {
    id: 5,
    title: "BSc Computer Science",
    subtitle: "University Of Alberta",
    date: "September 2021 - present",
    description: ["Pursuing a rigorous academic program in computer science."],
    icon: <IoCodeWorking />,
  },
];

function ExperienceButton({ experience, onClick, isSelected }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  // Enhanced button styling for a sleek look
  return (
    <Button
      onClick={onClick}
      sx={{
        my: 1,
        color: isSelected ? theme.palette.primary.main : 'white',
        borderColor: isSelected ? theme.palette.primary.light : 'white',
        display: 'flex',
        justifyContent: matches ? 'flex-start' : 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: isSelected ? theme.palette.background.paper : 'transparent',
        '&:hover': {
          backgroundColor: isSelected ? theme.palette.background.default : 'rgba(255,255,255,0.2)',
          borderColor: isSelected ? theme.palette.primary.light : 'white',
        },
        transition: 'all 0.3s ease-in-out',
        borderRadius: '20px', // Rounded corners for buttons
      }}
      variant="outlined"
      startIcon={isSelected ? <Zoom><IoCodeWorking /></Zoom> : null}
    >
      {experience.title}
    </Button>
  );
}

function TimelineSection() {
  const [selectedId, setSelectedId] = useState(experiences[0].id);

  // Container adjusted for a futuristic theme
  return (
    <Container maxWidth="lg" sx={{ py: 8, color: 'white', overflow: 'hidden' }}>
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        sx={{ fontWeight: 'bold', mb: 6, color: 'white' }}
      >
        / Experience
      </Typography>

      <Grid container spacing={4} justifyContent="center" alignItems="flex-start">
        <Grid item xs={12} md={3}>
          {experiences.map((experience) => (
            <ExperienceButton
              key={experience.id}
              experience={experience}
              onClick={() => setSelectedId(experience.id)}
              isSelected={selectedId === experience.id}
            />
          ))}
        </Grid>

        <Grid item xs={12} md={9} sx={{ height: '600px', overflowY: 'auto', paddingRight: '16px' }}>
          {experiences.filter((experience) => experience.id === selectedId).map((experience) => (
            <Fade key={experience.id} duration={700}>
              <Paper elevation={6} sx={{
                p: 4,
                mb: 2,
                backgroundColor: 'rgba(0,0,0,0.85)',
                color: 'white',
                borderRadius: '20px', // Rounded corners for Paper
                border: '1px solid white',
                transition: 'transform 0.3s ease-in-out',
                ':hover': { transform: 'scale(1.02)' }
              }}>
                <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 'bold' }}>
                  {experience.title}
                </Typography>
                <Typography variant="h6" sx={{ mb: 1, fontStyle: 'italic' }}>
                  {experience.subtitle}
                </Typography>
                <Typography sx={{ mb: 1, color: 'rgba(255,255,255,0.7)' }}>{experience.date}</Typography>
                <List sx={{ padding: 0 }}>
                  {experience.description.map((point, index) => (
                    <ListItem key={index} sx={{ display: 'list-item', mb: '5px', alignItems: 'flex-start' }}>
                      <ListItemText primary={point} sx={{ ml: '-16px' }} /> {/* Adjusted for correct bullet alignment */}
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Fade>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}

export default TimelineSection;
