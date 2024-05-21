import React from 'react'
import Section from '../assets/motionarteffect-img11.png'
import Page from '../assets/motionarteffect-img10.png'

const ApplySection = () => {
  return (
    <section className='w-[90%] mt-4 flex flex-col items-center'>
        <div className='w-[90%] p-2 my-8 flex justify-center items-center'>
            <h1 className='text-[#EEE5FF] sora text-3xl lg:text-4xl font-bold text-center'>Apply On Any Section Or Enable For Whole Page</h1>
        </div>
        <div className='w-[90%] lg:w-full flex flex-col lg:flex-row justify-center items-center lg:items-start'>
            <div className='w-full lg:w-1/3 p-4 flex flex-col bg-[#0e0f1a] items-center lg:items-start shadow-md border-2 border-[#6f6f6f] rounded-lg lg:mr-8'>
                <h1 className='text-[#EEE5FF] sora text-3xl lg:text-4xl font-bold p-2 mt-2 text-center lg:text-left'>Apply On Section</h1>
                <p className='text-[#EEE5FFBD] outfit text-md p-2 my-2 text-center lg:text-left'>Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website. </p>
                <img src={Section} alt="Not Found" />
            </div>
            <div className='w-[90%] lg:w-1/3 mt-4 lg:mt-0 p-4 flex flex-col bg-[#0e0f1a] items-center lg:items-start shadow-md border-2 border-[#6f6f6f] rounded-lg lg:mt-24'>
                <h1 className='text-[#EEE5FF] sora text-3xl lg:text-4xl font-bold p-2 mt-2 text-center lg:text-left'>Apply On Page</h1>
                <p className='text-[#EEE5FFBD] outfit text-md p-2 mt-2 text-center lg:text-left'>Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation.</p>
                <img src={Page} alt="Not Found" />
            </div>
        </div>
    </section>
  )
}

export default ApplySection
