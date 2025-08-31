import { useState, useEffect } from "react";
// import { purpleColor } from '../../utils/colors';
const purpleColor = "text-[#9980FF]";
const ExperienceCounter = () => {
  const [time, setTime] = useState(
    "1 year, 0 months, 0 days, 0 hours, 0 seconds"
  );

  useEffect(() => {
    // Create date in local timezone for March 1, 2024
    const startDate = new Date(2024, 2, 1, 0, 0, 0); // Month is 0-indexed, so 2 = March

    const updateCounter = () => {
      //   console.log(startDate);
      const now = new Date();
      //   console.log(now);

      let diff = now - startDate;
      console.log(diff);

      //   console.log(diff);
      // Calculate years
      const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
      diff -= years * (1000 * 60 * 60 * 24 * 365);

      // Calculate months (approximate)
      const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30.44));
      diff -= months * (1000 * 60 * 60 * 24 * 30.44);

      // Calculate days
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      diff -= days * (1000 * 60 * 60 * 24);

      // Calculate hours
      const hours = Math.floor(diff / (1000 * 60 * 60));
      diff -= hours * (1000 * 60 * 60);

      // Calculate minutes
      const minutes = Math.floor(diff / (1000 * 60));
      diff -= minutes * (1000 * 60);

      // Calculate seconds
      const seconds = Math.floor(diff / 1000);

      setTime(
        `${years} year${years !== 1 ? "s" : ""}, ${months} month${
          months !== 1 ? "s" : ""
        }, ${days} day${days !== 1 ? "s" : ""}, ${hours} hour${
          hours !== 1 ? "s" : ""
        }, ${minutes} minute${minutes !== 1 ? "s" : ""}, ${seconds} second${
          seconds !== 1 ? "s" : ""
        }`
      );
    };

    // Update immediately
    updateCounter();

    // Update every second
    const interval = setInterval(updateCounter, 1000);

    return () => clearInterval(interval);
  }, []);

  return <span className={`${purpleColor}`}>{`: "${time}"`}</span>;
};

export default ExperienceCounter;
