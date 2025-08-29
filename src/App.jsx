import ObjectCode from "./components/About/ObjectCode";

export default function App() {
  return (
    <div className='bg-[#020817] p-4 text-center h-full overflow-y-auto'>
      <div className='rounded-full p-1 mt-17 inline-block align-top'>
        <img
          src='./assets/mayur.png'
          alt='mayursinh chudasama'
          className='w-125 h-125 object-cover rounded-full shadow-lg'
        />
      </div>
      <div className='m-3 mt-7 inline-block border-1 border-[#6b7280] rounded-md'>
        <ObjectCode />
      </div>
    </div>
  );
}
