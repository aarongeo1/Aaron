import Spline from '@splinetool/react-spline';
import { lazy, Suspense } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { VscChevronRight } from 'react-icons/vsc';
import { useState, useEffect } from 'react';
import { IoMenu, IoCodeWorking, IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io5';
import Aaron from './images/profil.jpg';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Projects } from './data';
import Fade from 'react-reveal/Fade';
const LazySpline = lazy(() => import('@splinetool/react-spline'));
const INITIAL_DISPLAY_COUNT = 3; // Number of items to show initially

function ProjectsSection() {
  const [displayCount, setDisplayCount] = useState(INITIAL_DISPLAY_COUNT);

  const showMore = () => {
    setDisplayCount(Projects.length);
  };

  return (
    <>
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
        {displayCount < Projects.length && ( // Show button only if there are more projects to display
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

function App() {
  const [isActive, setIsActive] = useState(false);
  const [introText, setIntroText] = useState('Hi');
  const [charIndex, setCharIndex] = useState(0);
  const text = ' ,   I am Aaron Binoy';
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);
  const [animationDone, setAnimationDone] = useState(false);


  useEffect(() => {
    if (charIndex < text.length) {
      const id = requestAnimationFrame(() => {
        setTimeout(() => {
          setIntroText((prevText) => prevText + text.charAt(charIndex));
          setCharIndex(charIndex + 1);
        }, 70); // Delay in milliseconds
      });
  
      return () => {
        cancelAnimationFrame(id);
      };
    } else {
      // Set animationDone to true when the text animation is completed
      setAnimationDone(true);
    }
  }, [charIndex, text]);

  const handleSplineLoad = () => {
    setIsSplineLoaded(true);
  };

  const showLoadingMessage = !isSplineLoaded;

  return (
    <AnimatePresence initial={false}>
      <div className="flex w-screen min-h-screen flex-col items-center justify-center relative bg-primary pb-20">
        <nav className="w-full px-6 z-50 fixed inset-x-0 top-2 flex justify-center items-center">
          <div className="w-full md:w-880 bg-navBar p-4 rounded-2xl flex items-center justify-center">
            <div className="hidden md:flex items-center gap-24 ml-12 flex-1">
              <a
                href="#Home"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
              >
                Home
              </a>
              <a
                href="#About"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
              >
                About
              </a>
            </div>

            <p className="text-lg text-slate-200 mr-10 font-medium">AARON BINOY</p>
            <div className="hidden md:flex items-center gap-24 ml-12 flex-1">
              <a
                href="#Projects"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
              >
                Contact
              </a>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.2 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring' }}
              className="block md:hidden ml-auto cursor-pointer"
              onClick={() => setIsActive(!isActive)}
            >
              <IoMenu className="text-2xl text-textBase" />
            </motion.div>

            {isActive && (
              <div className="p-4 w-275 bg-navBar rounded-lg fixed top-24 right-16 flex flex-col items-center justify-evenly gap-6">
                <a
                  href="#Home"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                  onClick={() => setIsActive(false)}
                >
                  Home
                </a>
                <a
                  href="#About"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                  onClick={() => setIsActive(false)}
                >
                  About
                </a>
                <a
                  href="#Projects"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                  onClick={() => setIsActive(false)}
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                  onClick={() => setIsActive(false)}
                >
                  Contact
                </a>
              </div>
            )}
          </div>
        </nav>

        <div className="relative w-full h-screen" id="Home">
          <div className="text-center z-10 mt-24">
            <h1 className="text-3xl font-bold text-white">
              {introText}
              <span className="cursor-blink">|</span>
            </h1>
          </div>
          {animationDone && (
        <Suspense fallback={<div>Loading Spline...</div>}>
            <Spline
              scene="https://prod.spline.design/aiAAzwXPJgyAMVxi/scene.splinecode"
              onLoad={handleSplineLoad}
            />
        </Suspense>
      )}
        </div>


        <main className="w-[80%] mt-5">
          <Fade bottom>
          
          <h2 className="text-4xl font-bold text-white mb-6">/ About Me</h2>
          <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-24" id="About">
            <div className="w-full md:w-full flex items-center justify-center">
              <div className="w-275 h-340 bg-black rounded-md relative">
                <img
                  className="w-full h-full absolute -right-4 top-4 object-cover rounded-lg shadow-lg"
                  src={Aaron}
                  alt=""
                />
              </div>
            </div>
            <Fade bottom>
            <div className="w-full md:w-full flex flex-col items-center justify-center">
              <p className="text-lg text-textBase text-center">
                I am currently a BSc Honors Computer Science student at the University of Alberta. Alongside my academic
                pursuits, I find solace and inspiration in capturing the beauty of nature through photography. While my
                lens allows me to preserve fleeting moments in time, I also embrace the contrasting world of gaming.
                Immersed in virtual realms, I seek exhilaration and challenge through interactive experiences. Balancing
                the realms of technology and creativity, I am continuously honing my skills as both a computer scientist
                and an artist.
              </p>

              <div className="w-full mt-4">
                <h3 className="text-l font-bold text-white mb-2"> Some Tech Stacks I am Familiar With:</h3>
                <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                  <ul className="list-inside text-purple-500">
                    <li>
                      <VscChevronRight className="inline text-purple-900" /> Python
                    </li>
                    <li>
                      <VscChevronRight className="inline text-purple-900" /> JavaScript
                    </li>
                    <li>
                      <VscChevronRight className="inline text-purple-900" /> React.js
                    </li>
                    <li>
                      <VscChevronRight className="inline text-purple-900" /> Node.js
                    </li>
                    <li>
                      <VscChevronRight className="inline text-purple-900" /> Java
                    </li>
                    <li>
                      <VscChevronRight className="inline text-purple-900" /> MongoDB
                    </li>
                    <li>
                      <VscChevronRight className="inline text-purple-900" /> Mysql
                    </li>
                  </ul>
                  <ul className="list-inside text-purple-500">
                    <li>
                      <VscChevronRight className="inline text-purple-900" /> C++
                    </li>
                    <li>
                      <VscChevronRight className="inline text-purple-900" /> Pandas
                    </li>
                    <li>
                      <VscChevronRight className="inline text-purple-900" /> Scikit learn
                    </li>
                    <li>
                      <VscChevronRight className="inline text-purple-900" /> Android Studio
                    </li>
                    <li>
                      <VscChevronRight className="inline text-purple-900" /> Figma
                    </li>
                    <li>
                      <VscChevronRight className="inline text-purple-900" /> HTML
                    </li>
                    <li>
                      <VscChevronRight className="inline text-purple-900" /> SqlLite
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            </Fade>
          </section>
          </Fade>

          <section className="w-full flex items-center justify-center">
            <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(128, 0, 128)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(128, 0, 128)' }}
                date="May 2023 - present"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<IoCodeWorking />}
              >
                <h3 className="vertical-timeline-element-title">Computer Engineer Intern</h3>
                <h4 className="vertical-timeline-element-subtitle">Castle Rock Research Corporation</h4>
                <p>Artificial Intelligence (AI) · Web Development · C#</p>
              </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(128, 0, 128)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(128, 0, 128)' }}
                date="September 2023 - present"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<IoCodeWorking />}
              >
                <h3 className="vertical-timeline-element-title">Teaching Assistant</h3>
                <h4 className="vertical-timeline-element-subtitle">University Of Alberta</h4>
                <p></p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(128, 0, 128)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(128, 0, 128)' }}
                date="May 2023 - August 2023"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<IoCodeWorking />}
              >
                <h3 className="vertical-timeline-element-title">Full Stack Intern</h3>
                <h4 className="vertical-timeline-element-subtitle">RentKeepr</h4>
                <p>MongoDB · Git · Node.js · GitHub · REST APIs · JavaScript · CSS · HTML · React.js</p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(128, 0, 128)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(128, 0, 128)' }}
                date="September 2021 - present"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<IoCodeWorking />}
              >
                <p>Education</p>
                <h3 className="vertical-timeline-element-title">BSC Honors Computer Science</h3>
                <h4 className="vertical-timeline-element-subtitle">University Of Alberta</h4>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </section>
          <h2 className="text-4xl font-bold text-white mb-6">/ Projects</h2>
          <ProjectsSection />

    );


          <section id="contact" className="fles flex-col items-center justify-center w-full my-24">
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
        </main>
      </div>
    </AnimatePresence>
  );
}
export default App;
