import GlareHover from "../GSAP/GlareHover";
import ShinyText from "../GSAP/ShinyText";

export default function Heading({ headingText }) {
  return (
    <div className='flex justify-center mb-16 '>
      <GlareHover
        width='w-85'
        glareColor='#947CF6'
        glareOpacity={0.3}
        glareAngle={-30}
        glareSize={300}
        transitionDuration={800}
        playOnce={false}>
        <h2 className='text-4xl md:text-5xl p-2 mb-2 font-bold bg-clip-text bg-gray-800 '>
          <ShinyText
            text={headingText}
            disabled={false}
            speed={3}
            className='custom-class'
          />
        </h2>
      </GlareHover>
    </div>
  );
}
