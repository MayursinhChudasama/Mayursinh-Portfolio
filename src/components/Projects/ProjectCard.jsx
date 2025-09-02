import DecryptedText from "../GSAP/DecryptedText";
import ImageCarousel from "../GSAP/ImageCarousel";

export default function ProjectCard({ project, isMobile }) {
  const { title, description, images, role, t_used } = project;
  // start----
  return (
    <div className='px-6 mb-15 shadow-lg hover:shadow-xl transition-shadow duration-300 '>
      {isMobile && (
        <div className='p-6 flex flex-row gap-8 justify-center rounded-2xl bg-gradient-to-r from-gray-900 to-gray-800'>
          <div className='mb-4 '>
            <div className='flex flex-col gap-8'>
              <div className='py-3 mx-1'>
                <DecryptedText
                  text={title}
                  className='text-3xl text-center font-bold text-[#9333ea] '
                  encryptedClassName='text-3xl text-center font-bold text-[#9333ea]'
                />
              </div>
              {/* <div className='mt-2 text-center'>
                <p className='text-gray-300 p-3 leading-relaxed text-xl'>
                  {description}
                </p>
                <p className='text-gray-300 p-3 leading-relaxed text-xl'>
                  {role}
                </p>
                <p className='text-gray-300 p-3 leading-relaxed text-xl'>
                  Technologies Used:
                </p>
                <p className='text-gray-300 px-3 leading-relaxed text-lg'>
                  {t_used}
                </p>
              </div> */}
            </div>
            <div className='relative'>
              <ImageCarousel
                items={images}
                height='h-70'
                baseWidth={350}
                autoplay={false}
                autoplayDelay={3000}
                pauseOnHover={true}
                loop={false}
                round={true}
              />
            </div>
          </div>
        </div>
      )}
      {!isMobile && (
        <div className='p-6 flex flex-row gap-8 justify-between rounded-2xl bg-gradient-to-r from-gray-900 to-gray-800'>
          <div className='mb-4 w-200'>
            <div className='py-3 mx-1'>
              <DecryptedText
                text={title}
                className='text-5xl  text-center font-bold text-[#9333ea] '
                encryptedClassName='text-5xl  text-center font-bold text-[#9333ea]'
              />
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
                height='h-full'
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
      )}
    </div>
  );
}
