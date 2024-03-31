import React, { useState } from 'react';
import { IoLogoGithub } from 'react-icons/io5';
import Fade from 'react-reveal/Fade';
import { Projects } from './data';

const INITIAL_DISPLAY_COUNT = 9; // Adjusted for 3x3 grid

function ProjectsSection() {
  const [displayCount, setDisplayCount] = useState(INITIAL_DISPLAY_COUNT);

  const showMore = () => {
    setDisplayCount(prevCount => prevCount + 9); // Load 9 more items each time
  };

  return (
    <>
      <h2 className="text-4xl font-bold text-white mb-6">/ Projects</h2>
      {/* Adjusted for a 3x3 grid layout */}
      <section id="Projects" className="my-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
        <Fade bottom>
          {Projects &&
            Projects.slice(0, displayCount).map((project) => (
              <div key={project.id} className="border border-zinc-800 rounded-lg p-4 w-full max-w-[275px] hover:border-purple-500 duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex flex-col">
                  <p className="text-lg font-medium uppercase mb-2">{project.name}</p>
                  <img src={project.imageSrc} alt={project.name} className="h-48 object-cover rounded-md mb-4 filter grayscale hover:grayscale-0 transition duration-200 ease-in-out" />
                  <div className="flex-grow">
                    <p className="text-lg text-gray-300">
                      Technologies
                      <span className="block text-sm text-gray-500">{project.techs}</span>
                    </p>
                  </div>
                  <IoLogoGithub className="text-gray-300 text-3xl cursor-pointer self-end mt-2" />
                </a>
              </div>
            ))}
        </Fade>
        {displayCount < Projects.length && (
          <div className="w-full flex justify-center">
            <button onClick={showMore} className="mt-4 px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition duration-200 ease-in-out">
              Show More
            </button>
          </div>
        )}
      </section>
    </>
  );
}

export default ProjectsSection;
