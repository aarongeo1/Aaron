import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { IoLogoGithub } from 'react-icons/io5';
import { Projects } from './data';

const INITIAL_DISPLAY_COUNT = 9;

function ProjectsSection() {
  const [displayCount, setDisplayCount] = useState(INITIAL_DISPLAY_COUNT);

  const showMore = () => {
    setDisplayCount(prevCount => prevCount + 9);
  };

  // Animate the container to stagger the children's animation
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Define the animation for individual cards
  const cardAnimation = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  // Adjusted hover effect for white light from borders
  const hoverEffect = {
    scale: 1.05,
    boxShadow: '0 0 8px 3px white', // White glow effect
    transition: { type: 'spring', stiffness: 300 },
  };

  return (
    <>
      <h2 className="text-4xl font-bold text-white mb-6">/ Projects</h2>
      <motion.section
        id="Projects"
        variants={container}
        initial="hidden"
        animate="show"
        className="my-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center"
      >
        {Projects.map((project, index) => (
          <motion.div
            key={project.id}
            variants={cardAnimation}
            whileHover={hoverEffect}
            className="border border-zinc-800 rounded-lg p-4 w-full max-w-[275px] backdrop-filter backdrop-blur-xl bg-black/20 hover:bg-black/30 transition-all duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-xl"
            style={{ position: 'relative', zIndex: 1 }} // Ensure the glow effect is visible
          >
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex flex-col">
              <p className="text-lg font-medium uppercase mb-2">{project.name}</p>
              <div className="flex-grow">
                <p className="text-lg text-gray-300">
                  Technologies
                  <span className="block text-sm text-gray-500">{project.techs}</span>
                </p>
              </div>
              <IoLogoGithub className="text-gray-300 text-3xl cursor-pointer self-end mt-2" />
            </a>
          </motion.div>
        ))}
        {displayCount < Projects.length && (
          <div className="w-full flex justify-center mt-8">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 8px 3px white' }}
              whileTap={{ scale: 0.95 }}
              onClick={showMore}
              className="px-6 py-2 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-700 transition duration-200 ease-in-out"
            >
              Show More
            </motion.button>
          </div>
        )}
      </motion.section>
    </>
  );
}

export default ProjectsSection;
