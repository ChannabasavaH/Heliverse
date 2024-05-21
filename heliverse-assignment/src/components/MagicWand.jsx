import React from 'react';
import Magic from '../assets/motionarteffect-img5.png';
import { FaArrowRight } from "react-icons/fa";

const MagicWand = () => {
    return (
        <section className='w-full flex flex-wrap justify-between items-center lg:ml-12 p-8 mt-8'>
            <div className='w-full lg:w-1/2 mb-8 lg:mb-0'>
                <h1 className='text-[#EEE5FF] text-3xl lg:text-4xl font-bold my-4 sora'>
                    Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors
                </h1>
                <p className='text-[#EEE5FFBD] text-md mb-4 outfit'>
                    Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.
                </p>
                <button className='w-full lg:w-1/2 h-16 text-xl rounded-2xl bg-gradient-to-r from-purple-500 to-orange-500 text-white mb-4 flex justify-center items-center sora'>
                    Purchase from Envato <FaArrowRight className='ml-2' />
                </button>
            </div>
            <div className='w-full lg:w-1/2 flex justify-center items-center'>
                <img src={Magic} alt="Not Found" />
            </div>
        </section>
    );
}

export default MagicWand;
