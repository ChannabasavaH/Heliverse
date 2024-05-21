import React from 'react';

const MainContent = () => {
    return (
        <section>
            <div className='w-screen flex flex-col justify-center lg:flex lg:flex-row lg:justify-between mt-24 p-8'>
                <div className='w-full lg:w-1/3 flex flex-col justify-start items-center mb-8 lg:m-0'>
                    <div className='w-1/2 lg:w-1/4 flex flex-col text-center lg:text-left'>
                        <span className='text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-500 sora'>
                            Transform Your Website
                        </span>
                    </div>
                    <div className='lg:w-1/4 flex flex-col'>
                        <p className='text-md text-[#EEE5FF] outfit'>With Motion Art Effect</p>
                    </div>
                </div>
                <div className='w-full lg:w-1/3 flex flex-col justify-start items-center'>
                    <h1 className='text-3xl lg:text-6xl font-extrabold text-[#EEE5FF] sora'>
                        Attract Your Visitors Attention With Colorful
                    </h1>
                    <span className='text-3xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-500 sora'>
                        Motion Art Effect
                    </span>
                    <p className='text-lg text-[#EEE5FFBD] mt-12 outfit'>
                        Unleash the power of creativity with Motion Art for Elementor - your ultimate solution for seamlessly integrating captivating animations into your website.
                    </p>
                </div>
                <div className='w-full lg:w-1/3'>
                    <p></p>
                </div>
            </div>
        </section>
    );
};

export default MainContent;
