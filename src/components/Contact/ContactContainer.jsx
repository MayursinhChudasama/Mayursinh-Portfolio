//

import Heading from "../common/Heading";

export default function ContactContainer({ isMobile }) {
  return (
    <section className=''>
      <Heading headingText='Get in Touch' />

      <div className='flex flex-col md:flex-row justify-between items-center gap-8 text-white p-5'>
        <div className='ml-25'>
          <div>Mayursinh Chudasama</div>
          <div>Description</div>
          <div className='flex justify-center gap-4'>
            <span>Icon-1</span>
            <span>Icon-2</span>
          </div>
        </div>
        <div className='mr-25'>Quick Links</div>
      </div>
      <div className='border-b-1 border-[#6B7280] w-[90%] my-10 mx-auto'></div>
    </section>
  );
}
