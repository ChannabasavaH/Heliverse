import React from 'react'
import Browsers from '../assets/motionarteffect-img8.png'

const Browser = () => {
  return (
    <section className='w-full h-40 my-10 lg:my-20 flex justify-center items-center mt-20'>
        <div className='w-[90%] lg:w-[80%] bg-[#0e0f1a] border-2 border-[#6f6f6f] rounded-2xl shadow-md flex flex-col justify-center items-center '>
            <h1 className='text-[#EEE5FF] sora p-4 text-xl lg:text-3xl font-bold text-center'>Supported by All Popular Browsers</h1>
            <p className='text-[#EEE5FFBD] outfit p-4 text-md text-center'>Rest assured, Motion Art is designed to be compatible with all major web browsers.</p>
            <img src={Browsers} alt="Not Found" className='p-2 mx-2 mb-8' />
        </div>
    </section>
  )
}

export default Browser
