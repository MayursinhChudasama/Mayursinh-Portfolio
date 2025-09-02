import ImageCarousel from "../GSAP/ImageCarousel";

export default function ProjectCard({ project }) {
  const { title, description, images, role, t_used } = project;

  return (
    <div className='px-6 mb-15 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 '>
      <div className='p-6 flex flex-row gap-8 justify-between bg-gradient-to-r from-gray-900 to-gray-800'>
        <div className='mb-4  w-200'>
          <div className='p-1'>
            <h3 className='text-6xl py-4  text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500'>
              {title}
              {/* <a
                href={"link"}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-block px-4 py-2 mt-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors duration-200'>
                View Project
              </a> */}
            </h3>
          </div>
          <div className='mt-20'>
            <p className='text-gray-300 p-3 leading-relaxed text-left text-xl'>
              {description}
            </p>
            <p className='text-gray-300 p-3 leading-relaxed text-left text-xl'>
              {role}
            </p>
            <p className='text-gray-300 p-3 leading-relaxed text-left text-xl'>
              Technologies Used:
            </p>
            <p className='text-gray-300 px-3 leading-relaxed text-left text-lg'>
              {t_used}
            </p>
          </div>
        </div>
        <div className='flex flex-col items-center mr-25 '>
          <div className='relative'>
            <ImageCarousel
              items={images}
              baseWidth={800}
              autoplay={false}
              autoplayDelay={3000}
              pauseOnHover={true}
              loop={false}
              round={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
