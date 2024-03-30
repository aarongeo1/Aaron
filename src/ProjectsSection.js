// ProjectsSection.js
import React, { useState } from 'react';
import { IoLogoGithub } from 'react-icons/io5';
import Fade from 'react-reveal/Fade';
import { Projects } from './data';

const INITIAL_DISPLAY_COUNT = 3; // Number of items to show initially

function ProjectsSection() {
  const [displayCount, setDisplayCount] = useState(INITIAL_DISPLAY_COUNT);

  const showMore = () => {
    setDisplayCount(Projects.length);
  };

  return (
    <>
    <h2 className="text-4xl font-bold text-white mb-6">/ Projects</h2>
      <section id="Projects" className="flex flex-wrap items-center justify-evenly my-24 gap-4">
        <Fade bottom>
          {Projects &&
            Projects.slice(0, displayCount).map((n) => (
              <div key={n.id} className="border border-zinc-800 rounded-md p-2 min-w-[275px] md:max-[275px] hover:border-purple-500 duration-100 ease-in-out">
                <a href={n.github} target="_blank" rel="noopener noreferrer">
                  <p className="test-lg text-textBase font-medium uppercase">{n.name}</p>
                  <img src={n.imageSrc} className="w-full h-full object-cover rounded-md my-4" alt={n.name} />
                  <div className="flex flex-1 items-center justify-between">
                    <p className="text-lg text-gray-300">
                      Technologies
                      <span className="block text-sm text-gray-500">{n.techs}</span>
                    </p>
                    <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />
                  </div>
                </a>
              </div>
            ))}
        </Fade>
        {displayCount < Projects.length && (
          <div className="w-full flex justify-center">
            <button onClick={showMore} className="mt-4 px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">
              Show More
            </button>
          </div>
        )}
      </section>
    </>
  );
}

export default ProjectsSection;
