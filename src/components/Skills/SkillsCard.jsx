import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import FallingEffect from "../GSAP/FallingEffect";

export default function SkillsCard({
  items,
  itemHeight,
  itemWidth,
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
      className={`relative flex flex-col h-130 overflow-hidden group ${className}`}>
      <div
        className='flex-1 flex items-center justify-center p-4 cursor-pointer lg:h-130 sm:h-180'
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
        }}>
        <div className='w-full h-full min-h-[400px] relative'>
          <FallingEffect
            items={items}
            columns={columns}
            gravity={0.5}
            itemWidth={itemWidth}
            itemHeight={itemHeight}
            gap={40}
            trigger='click'
            className='transition-transform duration-300 group-hover:scale-105'
          />
        </div>
      </div>
    </motion.div>
  );
}
