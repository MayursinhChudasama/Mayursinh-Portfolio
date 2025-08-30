import { motion } from "framer-motion";
import ObjectCode from "./components/About/ObjectCode";
import Navbar from "./components/common/Navbar";
import DotGrid from "./components/GSAP/DotGrid";
import Particles from "./components/GSAP/particles";
import ProfileCard from "./components/GSAP/ProfileCard";
import TextCursor from "./components/GSAP/TextCursor";
import mayursinh_chudasama from "./mayursinh-chudasama.png";

export default function App() {
  return (
    <div className='w-full overflow-x-hidden'>
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
      <Navbar />
      {/* ABOUT */}
      <div className='relative w-full overflow-hidden bg-transparent text-center   mt-2'>
        <div className='absolute top-0 left-0 right-0 -z-1 w-screen h-[90%]'>
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
        <div className='rounded-full p-1 mt-15 inline-block align-top z-10 bg-transparent'>
          <ProfileCard imageUrl={mayursinh_chudasama} />
        </div>
        <motion.div
          className='m-3 mt-7 inline-block w-[95%] max-w-2xl border-1 border-[#6b7280] rounded-md bg-transparent z-10'
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
      <div className='mt-52 h-200 bg-white text-center border-1 border-white '>
        <p className='text-2xl font-bold'>SKILLS</p>
      </div>
    </div>
  );
}
