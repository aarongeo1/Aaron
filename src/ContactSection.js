import React, { useState } from 'react';
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io5';
import Fade from 'react-reveal/Fade';

function ContactSection() {
  // State to control the marquee effect
  const [isHovering, setIsHovering] = useState(false);

  // Inline style for the marquee effect
  const marqueeStyle = isHovering ? { animation: 'marquee 10s linear infinite' } : {};

  return (
    <section id="contact" className="flex flex-col items-center justify-center w-full my-24">
      <p className="text-2xl text-gray-400 capitalize">Contact me at</p>
      <Fade top>
        {/* Social Links */}
      </Fade>
      <Fade bottom>
        <div className="mt-8">
          <a
            href="mailto:your-email@example.com" // Replace with your email
            className="px-8 py-3 bg-transparent border border-zinc-800 rounded-2xl hover:border-purple-500 ease-in-out cursor-pointer flex items-center justify-center gap-3"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <p className="text-lg font-medium" style={marqueeStyle}>Contact Me</p>
          </a>
        </div>
      </Fade>
      {/* Styles for marquee effect */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </section>
  );
}

export default ContactSection;
