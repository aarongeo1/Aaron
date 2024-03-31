import React from 'react';
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io5';
import Fade from 'react-reveal/Fade';

function ContactSection() {
  return (
    <section id="contact" className="flex flex-col items-center justify-center w-full my-24">
      <p className="text-2xl text-gray-400 capitalize">Contact me at</p>
      <Fade top>
        <div className="flex items-center justify-center w-full my-4 flex-wrap gap-4">
          <a
            href="https://github.com/aarongeo1"
            className="px-3 py-5 border border-zinc-800 rounded-2xl hover:border-purple-500 ease-in-out cursor-pointer flex items-center justify-center gap-3"
            target="_blank" rel="noopener noreferrer"
          >
            <IoLogoGithub className="text-3xl" />
            <p className="text-lg">GitHub</p>
          </a>
          <a
            href="https://www.linkedin.com/in/aaronbinoy/"
            className="px-3 py-5 border border-zinc-800 rounded-2xl hover:border-purple-500 ease-in-out cursor-pointer flex items-center justify-center gap-3"
            target="_blank" rel="noopener noreferrer"
          >
            <IoLogoLinkedin className="text-3xl" />
            <p className="text-lg">LinkedIn</p>
          </a>
        </div>
      </Fade>
      <Fade bottom>
        <div className="mt-8">
          <a
            href="mailto:aaronforsocial@gmail.com" // Replace with your email
            className="px-8 py-3 bg-transparent border border-zinc-800 rounded-2xl hover:border-purple-500 ease-in-out cursor-pointer flex items-center justify-center gap-3"
          >
            <p className="text-lg font-medium">Contact Me</p>
          </a>
        </div>
      </Fade>
    </section>
  );
}

export default ContactSection;
