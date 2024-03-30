import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoCodeWorking } from 'react-icons/io5';
import { Typography, Container } from '@mui/material';
import Fade from 'react-reveal/Fade';

function TimelineSection() {
  const elementStyle = {
    background: '#4B0082', // Aligning with the AboutSection color scheme
    color: '#FFFFFF',
    boxShadow: '0 3px 15px rgba(0,0,0,0.2)'
  };

  const arrowStyle = {
    borderRight: '7px solid #4B0082'
  };

  const iconStyle = {
    background: '#4169E1',
    color: '#FFFFFF',
    boxShadow: '0 2px 10px rgba(0,0,0,0.3)'
  };

  return (
    <Container sx={{ py: 8 }}>
      <Fade bottom>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{ color: 'white', fontWeight: 'bold', mb: 6 }}
        >
          / Timeline
        </Typography>
        <VerticalTimeline>
          {/* Timeline elements are enhanced for a unified design aesthetic */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={elementStyle}
            contentArrowStyle={arrowStyle}
            date="January 2024 - present"
            iconStyle={iconStyle}
            icon={<IoCodeWorking />}
          >
            <h3 className="vertical-timeline-element-title">Computer Engineer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Castle Rock Research Corporation</h4>
            <p>Specializing in Artificial Intelligence (AI), Web Development, and C#</p>
          </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={elementStyle}
          contentArrowStyle={arrowStyle}
          date="September 2023 - present"
          iconStyle={iconStyle}
          icon={<IoCodeWorking />}
        >
          <h3 className="vertical-timeline-element-title">Teaching Assistant</h3>
          <h4 className="vertical-timeline-element-subtitle">University Of Alberta</h4>
          <p>Assisting in computer science courses, focusing on programming fundamentals.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={elementStyle}
          contentArrowStyle={arrowStyle}
          date="May 2023 - August 2023"
          iconStyle={iconStyle}
          icon={<IoCodeWorking />}
        >
          <h3 className="vertical-timeline-element-title">Full Stack Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">RentKeepr</h4>
          <p>Developed full-stack solutions using MongoDB, Node.js, and React.js among other technologies.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={elementStyle}
          contentArrowStyle={arrowStyle}
          date="September 2021 - present"
          iconStyle={iconStyle}
          icon={<IoCodeWorking />}
        >
          <h3 className="vertical-timeline-element-title">BSc Honors in Computer Science</h3>
          <h4 className="vertical-timeline-element-subtitle">University Of Alberta</h4>
          <p>Pursuing a rigorous academic and research program in computer science.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Fade>
    </Container>
  );
}

export default TimelineSection;