import React from 'react';

const MainContent = () => {
    return (
        <section className='w-full py-12 px-4 lg:px-8 flex flex-wrap justify-between items-center relative'>
            <div className='w-full lg:w-1/4 flex justify-start items-start p-4 relative'>
                <div className='w-full flex flex-col justify-center items-center lg:w-auto lg:flex lg:items-start'>
                    <span className='text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-500 sora'>
                        Transform Your Website
                    </span>
                    <p className='text-md text-[#EEE5FF] outfit'>With Motion Art Effect</p>
                </div>
            </div>
            <div className='w-full lg:w-2/4 flex flex-col justify-start items-center lg:items-start lg:text-left p-4'>
                <div className='w-full lg:w-auto lg:flex lg:flex-col lg:items-start'>
                    <h1 className='text-3xl lg:text-6xl font-extrabold text-[#EEE5FF] mb-4 sora'>
                        Attract Your Visitors Attention With Colorful
                    </h1>
                    <span className='text-3xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-500 sora'>
                        Motion Art Effect
                    </span>
                    <p className='text-lg text-[#EEE5FFBD] mt-12 outfit'>
                        Unleash the power of creativity with Motion Art for Elementor - your ultimate solution for seamlessly integrating captivating animations into your website.
                    </p>
                </div>
            </div>
            <div className='w-full lg:w-1/4 flex flex-col justify-center items-center'>
                <p></p>
            </div>
        </section>
    );
};

export default MainContent;
