import React from 'react';
import MotionEffectLogo from '../assets/MotionArtEffect-logo.png';

const MotionEffect = () => {
  return (
    <section className='w-full h-20 flex justify-between items-center pt-4 px-4 lg:px-20'>
      <div className='flex justify-center items-center'>
        <img src={MotionEffectLogo} alt="Not found" />
      </div>
      <div>
        <button className='lg:bg-white outfit w-32 h-10 rounded text-black p-2 text-center hover:bg-black hover:text-white hover:border-white hover:border-2'>
          Purchase Now
        </button>
      </div>
    </section>
  );
};

export default MotionEffect;
