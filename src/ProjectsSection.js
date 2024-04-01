import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { IoLogoGithub } from 'react-icons/io5';
import { Projects } from './data';
import { Container, Typography } from '@mui/material';

const INITIAL_DISPLAY_COUNT = 3;

function ProjectsSection() {
  const [displayCount, setDisplayCount] = useState(INITIAL_DISPLAY_COUNT);

  const showMore = () => {
    setDisplayCount(prevCount => prevCount + 9);
  };

  return (
    <>
      <Container id="Projects" maxWidth="lg" sx={{ color: 'white', overflow: 'hidden' }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 6, color: 'white' }}>
          / Projects
        </Typography>
        <motion.section variants={{ hidden: {}, show: { transition: { staggerChildren: 0.2 } } }} initial="hidden" animate="show" className="my-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          {Projects.slice(0, displayCount).map((project) => (
            <motion.div key={project.id} variants={{ hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1, transition: { duration: 0.5 } } }} whileHover={{ scale: 1.05, boxShadow: '0 0 8px 3px white' }} className="border border-zinc-800 rounded-lg p-4 w-full max-w-xs backdrop-filter backdrop-blur-xl bg-black/20 hover:bg-black/30 transition-all duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-xl" style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full">
                <p className="text-lg font-medium uppercase mb-2">{project.name}</p>
                <p className="text-sm text-gray-400 flex-grow">{project.description}</p>
                <div className="mt-4">
                  <p className="text-lg text-gray-300">Technologies</p>
                  <span className="block text-sm text-gray-500">{project.techs}</span>
                </div>
                <IoLogoGithub className="text-gray-300 text-3xl cursor-pointer self-end mt-4" />
              </a>
            </motion.div>
          ))}
        </motion.section>
        {displayCount < Projects.length && (
          <div className="flex justify-center mt-8">
            {/* Custom "Show More" button with enhanced visibility and alignment, placed outside the grid */}
            <motion.div 
              whileHover={{ scale: 1.05, boxShadow: '0 0 8px 3px #FFFFFF' }}
              whileTap={{ scale: 0.95 }}
              onClick={showMore}
              className="px-6 py-2 bg-white text-black rounded-lg shadow-lg cursor-pointer hover:bg-gray-100 transition duration-200 ease-in-out"
              style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}
            >
              Show More
            </motion.div>
          </div>
        )}
      </Container>
    </>
  );
}

export default ProjectsSection;
