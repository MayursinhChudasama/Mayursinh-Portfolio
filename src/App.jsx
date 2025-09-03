import Navbar from "./components/common/Navbar";
import Particles from "./components/GSAP/Particles";
import TextCursor from "./components/GSAP/TextCursor";

import SkillsContainer from "./components/Skills/SkillsContainer";
import { useEffect, useState } from "react";
import ProjectsContainer from "./components/Projects/ProjectsContainer";
import ContactContainer from "./components/Contact/ContactContainer";
import AboutContainer from "./components/About/AboutContainer";

export default function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const handleChange = (e) => setIsMobile(e.matches);

    setIsMobile(mq.matches); // initial check
    mq.addEventListener("change", handleChange);

    return () => mq.removeEventListener("change", handleChange);
  }, []);
  return (
    <div className='min-h-screen w-full overflow-x-hidden relative'>
      <TextCursor
        text='.'
        delay={0.01}
        spacing={80}
        followMouseDirection={true}
        randomFloat={true}
        exitDuration={0.3}
        removalInterval={20}
        maxPoints={10}
      />
      <div className='fixed inset-0 -z-10'>
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
          className='w-full h-full'
        />
      </div>
      <Navbar />
      {/* ABOUT */}
      <div
        id='home'
        className='relative mt-10 h-full text-center bg-transparent z-10'>
        <AboutContainer isMobile={isMobile} />
      </div>

      {/* SKILLS */}
      <div
        id='skills'
        className='relative mt-10 h-full text-center bg-transparent z-10'>
        <SkillsContainer isMobile={isMobile} />
      </div>
      {/* PROJECTS */}
      <div
        id='projects'
        className='relative mt-10 h-full text-center bg-transparent z-10'>
        <ProjectsContainer isMobile={isMobile} />
      </div>
      {/* Contact Page*/}
      <div
        id='contact'
        className='relative mt-10 h-full text-center bg-transparent z-10'>
        <ContactContainer />
      </div>
    </div>
  );
}
