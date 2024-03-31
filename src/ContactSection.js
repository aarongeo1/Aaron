import React from 'react';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';
import { FaRobot, FaStackOverflow, FaLaptopCode, FaChalkboardTeacher, FaPython } from 'react-icons/fa';
import { motion } from 'framer-motion'; // For animation

function ContactSection() {
  // Animation for the container to stagger the children's animation
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Animation for individual items
  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <>
      <motion.section
        id="contact"
        className="flex flex-col items-center justify-center w-full my-24"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p className="text-2xl text-gray-400 capitalize" variants={item}>Contact me at</motion.p>
        <motion.div 
          className="flex items-center justify-center w-full my-4 flex-wrap gap-4" 
          variants={container}
        >
          {/* Social Links with animation */}
          <motion.a
            href="https://github.com/aarongeo1"
            className="px-3 py-5 border border-zinc-800 rounded-2xl hover:border-purple-500 ease-in-out cursor-pointer flex items-center justify-center gap-3"
            target="_blank" rel="noopener noreferrer"
            variants={item}
          >
            <IoLogoGithub className="text-3xl" />
            <p className="text-lg">GitHub</p>
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/aaronbinoy/"
            className="px-3 py-5 border border-zinc-800 rounded-2xl hover:border-purple-500 ease-in-out cursor-pointer flex items-center justify-center gap-3"
            target="_blank" rel="noopener noreferrer"
            variants={item}
          >
            <IoLogoLinkedin className="text-3xl" />
            <p className="text-lg">LinkedIn</p>
          </motion.a>
        </motion.div>
        <motion.div 
          className="mt-8"
          variants={item}
        >
          <a
            href="mailto:aaronforsocial@gmail.com"
            className="px-8 py-3 bg-transparent border border-zinc-800 rounded-2xl hover:border-purple-500 ease-in-out cursor-pointer flex items-center justify-center gap-3"
          >
            <p className="text-lg font-medium">Contact Me</p>
          </a>
        </motion.div>
        <motion.div 
          className="text-2xl text-gray-400 mt-12"
          variants={item}
        >I specialize in</motion.div>
        <motion.div 
          className="flex items-center justify-center mt-4 flex-wrap gap-8"
          variants={container}
        >
          {/* Specialties with animations */}
          {[FaStackOverflow, FaLaptopCode, FaRobot, FaChalkboardTeacher, FaPython].map((Icon, index) => (
            <motion.div key={index} className="text-center" variants={item}>
              <Icon className="text-4xl mx-auto hover:text-purple-500 transition-colors duration-300" />
              <p className="mt-2 text-lg text-gray-300">{['Full Stack Development', 'Web Dev', 'Machine Learning & AI', 'Academic Support', 'Python Programming'][index]}</p>
            </motion.div>
          ))}
        </motion.div>
        </motion.section>
    <footer className="w-full text-center py-4 border-t border-gray-800 mt-24">
        <motion.div
          variants={item}
          initial="hidden"
          animate="show"
          className="text-sm text-gray-400"
        >
          <p>Build and Designed by Aaron Binoy</p>
          <p>All rights reserved. ©</p>
        </motion.div>
      </footer>
    </>
  );
}


export default ContactSection;
