import { motion } from "framer-motion";
import ObjectCode from "./components/About/ObjectCode";
import Navbar from "./components/common/Navbar";
import Particles from "./components/GSAP/Particles";
import ProfileCard from "./components/GSAP/ProfileCard";
import TextCursor from "./components/GSAP/TextCursor";
import mayursinh_chudasama from "./assets/mayursinh-chudasama.png";
import SkillsContainer from "./components/Skills/SkillsContainer";

export default function App() {
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
      <div className='relative w-full overflow-hidden bg-transparent text-center mt-2 z-10 shadow-md mt-15 mb-53'>
        <div className='rounded-full p-1 mt-15  inline-block align-top  bg-transparent'>
          <ProfileCard imageUrl={mayursinh_chudasama} />
        </div>
        <motion.div
          className='m-3 mt-7 inline-block w-[95%] max-w-2xl border-1 border-[#6b7280] rounded-md bg-transparent '
          whileHover={{
            y: 8,
            transition: {
              duration: 0.3,
              ease: "easeOut",
            },
          }}
          whileTap={{
            y: 12,
            transition: {
              duration: 0.3,
              ease: "easeOut",
            },
          }}
          initial={{ y: 0 }}>
          <ObjectCode />
        </motion.div>
      </div>
      {/* SKILLS */}
      <div className='relative mt-52 h-full text-center bg-transparent z-10'>
        <SkillsContainer />
      </div>
    </div>
  );
}
