import React, { Suspense, useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './NavBar';
import AboutSection from './AboutSection';
import TimelineSection from './Timeline';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';
import Maze from './Maze';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [click, setClick] = useState(false);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseenter', onMouseEnter);
      document.addEventListener('mouseleave', onMouseLeave);
      document.addEventListener('mousedown', onMouseDown);
      document.addEventListener('mouseup', onMouseUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
    };

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseEnter = () => {
      setHidden(false);
    };

    const onMouseLeave = () => {
      setHidden(true);
    };

    const onMouseDown = () => {
      setClick(true);
    };

    const onMouseUp = () => {
      setClick(false);
    };

    addEventListeners();
    return () => removeEventListeners();
  }, []);

  return (
    <div
      style={{
        zIndex: 9999,
        position: 'fixed',
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        opacity: hidden ? 0 : 1,
        backgroundColor: click ? '#FFFFFF' : 'transparent', // Using white for the click to keep the B&W theme
        border: '2px solid white', // Keeping the retro-style border color
        borderRadius: '50%', // Circle shape for a simplistic retro feel
        width: '20px', // Size of the cursor
        height: '20px', // Size of the cursor
        transition: 'transform 0.2s ease-out, background-color 0.2s', // Smooth transitions for dynamic effect
        // Adding a shadow for a more futuristic feel
        boxShadow: click ? '0 0 15px #FFFFFF' : '0 0 8px #FFFFFF',
      }}
    />
  );
};


function TypingText({ text, speed }) {
  const [displayText, setDisplayText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);
    return () => clearInterval(typingInterval);
  }, [text, speed]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h1 className="text-3xl font-bold text-white" style={{ fontFamily: "Orbitron, sans-serif" }}>
        {displayText}
        {cursorVisible && '|'}
      </h1>
    </motion.div>
  );
}

function App() {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const updateDimensions = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const [mazeStyle, setMazeStyle] = useState({
    filter: 'blur(4px)',
    opacity: 1,
    paddingTop: '100px'
  });

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const maxScroll = document.body.clientHeight - window.innerHeight;
    const blurProgress = scrollPosition / maxScroll; // Calculate blur progress
  
    // Calculate blur value based on scroll position
    const newBlur = 2 - 1 * blurProgress; // Start with 4 blur and reduce to 0
  
    // Set styles based on scroll position
    setMazeStyle({
      filter: `blur(${newBlur}px)`,
      opacity: 1, // Keep opacity always at 100%
      paddingTop: '100px' // Maintain padding from the top
    });
  };
  

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Perform an initial style update based on the scroll position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  
  // Dynamically adjust font size based on screen width
  const isMobile = screenWidth < 768;
  const titleFontSize = isMobile ? '5xl' : '8xl'; // Adjust sizes as needed
  const subTextFontSize = isMobile ? 'lg' : 'xl';
  const calculateFontSize = () => {
    if (screenWidth > 1024) return '5rem'; // Large screens
    if (screenWidth > 768) return '4rem'; // Medium screens
    return '2rem'; // Small screens
  };
  return (
    <div style={{ cursor: 'none' }}>
    <AnimatePresence initial={false}>
       <CustomCursor />
      <div className="flex w-screen min-h-screen flex-col items-center justify-center relative bg-black text-white pb-20 overflow-hidden">
        <Navbar />
        <div className="fixed top-0 left-0 w-full h-screen" style={mazeStyle} id="Home">
          <Maze />
        </div>
        <div className="relative w-full h-screen z-10 flex flex-col justify-center items-center text-center">
          <TypingText text="Hi, I am Aaron Binoy" speed={100} />
          <div className="mt-4" style={{ fontFamily: "Orbitron, sans-serif", display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              style={{ fontSize: calculateFontSize() }}
              className="font-bold uppercase"
            >
              DEVELOPER
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.75 }}
              className={`text-${isMobile ? '3xl' : '4xl'} font-bold uppercase`}
            >
              &
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              style={{ fontSize: calculateFontSize() }}
              className="font-bold uppercase"
            >
              PROGRAMMER
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 1.25 }}
              style={{
                  fontSize: subTextFontSize,
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: '300',
                  letterSpacing: '0.05em',
                  lineHeight: '1.6',
                  maxWidth: '80%',
                  textAlign: 'center',
                  margin: '0 auto',
              }}
            >
              A Software Developer based in Edmonton, Alberta. Passionate about Coding, Machine Learning, and Full Stack Development.
            </motion.p>
          </div>
        </div>
        <main className="w-[80%] mt-5 z-20 relative">
          <div ref={aboutRef}><AboutSection /></div>
          <TimelineSection />
          <ProjectsSection />
          <div ref={contactRef}><ContactSection /></div>
        </main>
      </div>
    </AnimatePresence>
    </div>
  );
}

export default App;