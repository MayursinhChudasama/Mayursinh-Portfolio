import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import FallingEffect from "../GSAP/FallingEffect";

export default function SkillsCard({
  items,
  title = "",
  columns = 2,
  className = "",
  delay = 0,
}) {
  const cardRef = useRef(null);

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        delay: delay,
      },
    },
  };

  return (
    <motion.div
      ref={cardRef}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, margin: "-50px" }}
      variants={cardVariants}
      className={`relative flex flex-col h-full overflow-hidden group ${className}`}>
      <div className='p-6 pb-2'>
        <h3 className='text-xl font-semibold text-white mb-4 flex items-center'>
          <span className='bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent'>
            {title}
          </span>
        </h3>
      </div>

      <div
        className='flex-1 flex items-center justify-center p-4 cursor-pointer'
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
        }}>
        <div className='w-full h-full min-h-[300px] relative'>
          <FallingEffect
            items={items}
            columns={columns}
            gravity={0.5}
            itemWidth={70}
            itemHeight={70}
            gap={10}
            trigger='click'
            className='transition-transform duration-300 group-hover:scale-105'
          />
        </div>
      </div>

      <div className='absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
        <div className='absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-2xl'></div>
      </div>
    </motion.div>
  );
}
