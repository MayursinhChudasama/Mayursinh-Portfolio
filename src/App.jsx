import ObjectCode from "./components/About/ObjectCode";
import mayursinh_chudasama from "./mayursinh-chudasama.png";
export default function App() {
  return (
    <div className='bg-[#020817] p-4 text-center h-full overflow-auto '>
      <div className='rounded-full p-1 mt-17 inline-block align-top '>
        <img
          src={mayursinh_chudasama}
          alt='mayursinh chudasama'
          className='ml-5 w-90 h-90 lg:w-125 lg:h-125 object-cover rounded-full shadow-lg'
        />
      </div>
      <div className='m-3 mt-7 inline-block border-1 border-[#6b7280] rounded-md'>
        <ObjectCode />
      </div>
    </div>
  );
}
