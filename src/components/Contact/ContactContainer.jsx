//

import { Link } from "react-scroll";
import Heading from "../common/Heading";
import {
  FaEnvelope,
  FaLinkedin,
  FaMapMarkerAlt,
  FaGithub,
} from "react-icons/fa";

export default function ContactContainer({ isMobile }) {
  return (
    <section className=''>
      <Heading headingText='Get in Touch' />

      <div className='bg-[#0a0f1c] text-white p-8 md:p-16'>
        <div className='flex flex-col md:flex-row justify-between gap-10 md:gap-20'>
          {/* Left Section */}
          <div className='flex-1 space-y-6'>
            <h2 className='text-4xl font-bold text-indigo-400'>
              Mayursinh Chudasama
            </h2>
            <p className='text-gray-300 leading-relaxed text-center lg:w-150 lg:ml-30 text-lg'>
              Frontend Developer with a focus on building user-friendly web
              applications. Proficient in ReactJS and NextJS, and passionate
              about delivering responsive and scalable solutions. A quick
              learner dedicated to exploring new technologies, frameworks, and
              tools for innovative results.
            </p>

            {/* Social Icons */}
            <div className='flex gap-4 items-center justify-center'>
              <a
                href='https:www.linkedin.com/in/mayursinh-chudasama'
                className='p-3 rounded-xl bg-gray-800 hover:bg-gray-700 transition'>
                <FaLinkedin size={30} />
              </a>
              <a
                href='mailto:contact.mayursinh@gmail.com '
                className='p-3 rounded-xl bg-gray-800 hover:bg-gray-700 transition'>
                <FaEnvelope size={30} />
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className='flex-1 '>
            <h3 className='text-4xl font-semibold text-indigo-400 mb-4'>
              Quick Links
            </h3>
            <ul className='space-y-3 text-gray-300 flex flex-col justify-center text-lg'>
              <Link
                to='home'
                className='hover:text-indigo-400 cursor-pointer'
                smooth={true}
                duration={500}>
                Home
              </Link>
              <Link
                to='skills'
                className='hover:text-indigo-400 cursor-pointer'
                smooth={true}
                duration={500}>
                Skills
              </Link>
              <Link
                to='projects'
                className='hover:text-indigo-400 cursor-pointer'
                smooth={true}
                duration={500}>
                Projects
              </Link>
              <Link
                to='contact'
                className='hover:text-indigo-400 cursor-pointer'
                smooth={true}
                duration={500}>
                Contact
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div className='border-b-1 border-[#6B7280] w-[90%] my-10 mx-auto'></div>
    </section>
  );
}
