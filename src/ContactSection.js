// ContactSection.js
import React from 'react';
import Fade from 'react-reveal/Fade';
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io5';

function ContactSection() {
  return (
    <section id="contact" className="flex flex-col items-center justify-center w-full my-24">
      <p className="text-2xl text-gray-400 capitalize">Contact me at</p>
      <Fade top>
        <div className="flex items-center justify-center w-full my-4 flex-wrap gap-4">
          <a
            href="https://github.com/aarongeo1"
            className="w-full md:w-auto px-3 md:px-8 py-5 border border-zinc-800 rounded-2xl hover:border-purple-500 ease-in-out cursor-pointer flex items-center justify-center gap-3"
          >
            <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />
            <p className="text-lg text-textBase">GitHub</p>
          </a>
        </div>
        <div className="flex items-center justify-center w-full my-4 flex-wrap gap-4">
          <a
            href="https://www.linkedin.com/in/aaronbinoy/"
            className="w-full md:w-auto px-3 md:px-8 py-5 border border-zinc-800 rounded-2xl hover:border-purple-500 ease-in-out cursor-pointer flex items-center justify-center gap-3"
          >
            <IoLogoLinkedin className="text-textBase text-3xl cursor-pointer" />
            <p className="text-lg text-textBase">LinkedIn</p>
          </a>
        </div>
        <div className="flex items-center justify-center w-full my-4 flex-wrap gap-4">
          <a
            href="https://www.instagram.com/aarongeo_/"
            className="w-full md:w-auto px-3 md:px-8 py-5 border border-zinc-800 rounded-2xl hover:border-purple-500 ease-in-out cursor-pointer flex items-center justify-center gap-3"
          >
            <IoLogoInstagram className="text-textBase text-3xl cursor-pointer" />
            <p className="text-lg text-textBase">Instagram</p>
          </a>
        </div>
      </Fade>
    </section>
  );
}

export default ContactSection;
