// components/GradientTiltCard.jsx
import React, { useRef, useCallback } from "react";

const ProfileCard = ({ imageUrl, className = "" }) => {
  const cardRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 10;
    const rotateX = ((centerY - y) / centerY) * 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!cardRef.current) return;

    cardRef.current.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg)";
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        background: `radial-gradient(farthest-corner circle at var(--pointer-x) var(--pointer-y), hsl(248, 25%, 80%) 12%, hsla(207, 40%, 30%, 0.8) 90%)`,
        transformStyle: "preserve-3d",
      }}>
      <div className='w-full h-full flex items-center justify-center transform-gpu'>
        <img
          src={imageUrl}
          alt='Card content'
          className='md:w-25 md:h-25 lg:w-125 lg:h-125 object-cover rounded-lg shadow-lg transform-gpu'
          style={{ transform: "translateZ(40px)" }}
        />
      </div>
    </div>
  );
};

export default ProfileCard;
