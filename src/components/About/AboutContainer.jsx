import { motion } from "framer-motion";

import PixelTransition from "../GSAP/PixelTransition";
import ProfileCard from "../GSAP/ProfileCard";
import ObjectCode from "./ObjectCode";
import mayursinh_chudasama from "../../assets/mayursinh-chudasama.png";
import mayursinh_chudasama2 from "../../assets/mayursinh-chudasama2.png";

export default function AboutContainer({ isMobile }) {
  return (
    <div
      id='home'
      className='relative w-full overflow-hidden bg-transparent text-center z-10 shadow-md mt-15 mb-53'>
      <div className='rounded-full p-1 mt-15 inline-block align-top  bg-transparent'>
        {isMobile ? (
          <div className='sm:w-25 sm:h-25 md:w-125 md:h-125 lg:w-125 lg:h-125'>
            <PixelTransition
              firstContent={<ProfileCard imageUrl={mayursinh_chudasama} />}
              secondContent={<ProfileCard imageUrl={mayursinh_chudasama2} />}
              gridSize={25}
              pixelColor='#020817'
              animationStepDuration={0.4}
              className='custom-pixel-card'
            />
          </div>
        ) : (
          <ProfileCard imageUrl={mayursinh_chudasama} />
        )}
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
  );
}
