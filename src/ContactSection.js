import React from 'react';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';
import { FaRobot, FaStackOverflow, FaLaptopCode, FaChalkboardTeacher, FaPython } from 'react-icons/fa';
import { motion } from 'framer-motion';

function ContactSection() {
  // Define social links and icons in an array for easier mapping
  const socialLinks = [
    { href: "https://github.com/aarongeo1", icon: IoLogoGithub, label: "GitHub" },
    { href: "https://www.linkedin.com/in/aaronbinoy/", icon: IoLogoLinkedin, label: "LinkedIn" },
  ];

  // Specialties icons and labels
  const specialties = [
    { Icon: FaStackOverflow, label: "Full Stack Development" },
    { Icon: FaLaptopCode, label: "Web Dev" },
    { Icon: FaRobot, label: "Machine Learning & AI" },
    { Icon: FaChalkboardTeacher, label: "Academic Support" },
    { Icon: FaPython, label: "Python Programming" },
  ];

  // Animation variants
  const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
  const item = { hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1, transition: { duration: 0.5 } } };

  return (
    <>
      <motion.section id="contact" className="flex flex-col items-center justify-center w-full my-24" variants={container} initial="hidden" animate="show">
        <motion.p className="text-2xl text-white capitalize" variants={item}>Contact me at</motion.p>
        <motion.div className="flex items-center justify-center w-full my-4 flex-wrap gap-4" variants={container}>
          {socialLinks.map((link, index) => (
            <motion.a key={index} href={link.href} className="px-4 py-2 border border-gray-700 rounded-2xl hover:bg-gray-800 hover:text-white ease-in-out cursor-pointer flex items-center justify-center gap-2" target="_blank" rel="noopener noreferrer" variants={item} aria-label={link.label}>
              <link.icon className="text-3xl" />
              <p className="text-lg">{link.label}</p>
            </motion.a>
          ))}
        </motion.div>
        <motion.div className="mt-8" variants={item}>
          <a href="mailto:aaronforsocial@gmail.com" className="px-8 py-3 border border-gray-700 rounded-2xl hover:bg-gray-800 hover:text-white ease-in-out cursor-pointer flex items-center justify-center gap-3" aria-label="Contact Me Email">
            <p className="text-lg font-medium">Contact Me</p>
          </a>
        </motion.div>
        <motion.div className="flex items-center justify-center mt-4 flex-wrap gap-8" variants={container}>
          {specialties.map((specialty, index) => (
            <motion.div key={index} className="text-center" variants={item}>
              <specialty.Icon className="text-4xl mx-auto hover:text-white transition-colors duration-300" />
              <p className="mt-2 text-lg">{specialty.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
      <footer className="w-full text-center py-4 border-t border-gray-800 mt-24">
        <motion.div variants={item} initial="hidden" animate="show" className="text-sm">
        <p>Built and Designed by Aaron Binoy.</p>
        <p>© {new Date().getFullYear()} Aaron Binoy. All rights reserved.</p>
        </motion.div>
      </footer>
    </>
  );
}

export default ContactSection;
