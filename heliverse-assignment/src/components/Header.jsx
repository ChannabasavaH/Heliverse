import React from 'react';
import envato from '../assets/envatomarketlogo.jpeg';

const Header = () => {
  return (
    <header className='w-full sticky top-0 z-20 h-16 flex justify-between items-center bg-[#262626] text-[#545454] p-2'>
      <div className='flex justify-center items-center p-1'>
        <img src={envato} alt="Not found" className='w-6 h-6'/>
        <span className='text-white font-bold text-xl ml-2'>envato</span>
        <span className='text-green-500 font-light text-xl ml-1'>market</span>
      </div>
      <div className='p-1'>
        <button className='w-24 h-8 bg-[#83B440] text-white text-center rounded'>Buy Now</button>
      </div>
    </header>
  );
}

export default Header;
