import React from 'react'
import Like from '../assets/motionarteffect-img6.png'
import HalfMoon from '../assets/motionarteffect-img7.png'
import Bolt from '../assets/motionarteffect-img9.png'

const LightWeight = () => {
    return (
        <section className='w-full my-8 flex flex-col justify-center items-center p-4'>
            <div className='w-full lg:w-1/2 flex flex-col justify-center items-center p-2'>
                <h1 className='text-[#EEE5FF] sora text-3xl lg:text-4xl font-bold my-4 text-center'>An All-Round Plugin With Powerful Features</h1>
                <p className='text-[#EEE5FFBD] outfit text-md mb-4 text-center lg:mb-12'>Whether you're a seasoned web designer or just starting out, Motion Art for Elementor seamlessly integrates with the Elementor platform, providing you with a seamless and intuitive experience.</p>
            </div>
            <div className='flex flex-wrap lg:flex-nowrap justify-center items-center lg:justify-around lg:m-0'>
                <div className='w-full lg:w-1/4 flex flex-col items-start bg-[#0e0f1a] border-2 border-[#6f6f6f] rounded-2xl shadow-md p-4 mx-2 my-4 lg:my-0 h-96'>
                    <img src={Bolt} alt="Not Found" className='h-36 w-36' />
                    <h1 className='text-[#EEE5FF] sora text-xl font-bold mt-4'>Light Weight</h1>
                    <p className='text-[#EEE5FFBD] outfit text-md mt-2'>Motion Art for Elementor is designed to be lightweight.</p>
                </div>
                <div className='w-full lg:w-1/4 flex flex-col items-start bg-[#0e0f1a] border-2 border-[#6f6f6f] rounded-2xl shadow-md p-4 mx-2 my-4 lg:my-0 h-96'>
                    <img src={Like} alt="Not Found" className='h-36 w-36' />
                    <h1 className='text-[#EEE5FF] sora text-xl font-bold mt-4'>100% Responsive</h1>
                    <p className='text-[#EEE5FFBD] outfit text-md mt-2'>Create a consistent visual experience across all devices.</p>
                </div>
                <div className='w-full lg:w-1/4 flex flex-col items-start bg-[#0e0f1a] border-2 border-[#6f6f6f] rounded-2xl shadow-md p-4 mx-2 my-4 lg:my-0 h-96'>
                    <img src={HalfMoon} alt="Not Found" className='h-36 w-36' />
                    <h1 className='text-[#EEE5FF] sora text-xl font-bold mt-4'>User Friendly Interface</h1>
                    <p className='text-[#EEE5FFBD] outfit text-md mt-2'>Ensure a smooth experience for both applicants and administrators.</p>
                </div>
            </div>
        </section>
    )
}

export default LightWeight
