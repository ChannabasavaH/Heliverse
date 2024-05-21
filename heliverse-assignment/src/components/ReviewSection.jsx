import React from 'react';
import WordPressLogo from '../assets/motionarteffect-img3.png';
import GoogleLogo from '../assets/motionarteffect-img1.png';
import EnvatoLogo from '../assets/motionarteffect-img2.png';
import Stars from '../assets/motionarteffect-img4.png';

const ReviewSection = () => {
    return (
        <section className='w-full p-4 flex flex-col'>
            <div className='w-full flex justify-center items-center mb-8 p-2'>
                <p className='text-[#EEE5FF] text-2xl font-bold outfit'>Trusted by thousands of users around the world</p>
            </div>
            <div className='w-full flex flex-wrap justify-center lg:justify-evenly'>
                <div className='flex justify-center items-center m-2 lg:m-4'>
                    <div className='p-2'>
                        <img src={EnvatoLogo} alt="Not Found" />
                    </div>
                    <div className='p-2 flex flex-col'>
                        <img src={Stars} alt="Not Found" className='mb-2 lg:mb-4'/>
                        <p className='text-[#EEE5FFBD] text-center sora'>4.5 Score, 9 Review</p>
                    </div>
                </div>
                <div className='flex justify-center items-center m-2 lg:m-4'>
                    <div className='p-2'>
                        <img src={GoogleLogo} alt="Not Found" />
                    </div>
                    <div className='p-2 flex flex-col'>
                        <img src={Stars} alt="Not Found" className='mb-2 lg:mb-4'/>
                        <p className='text-[#EEE5FFBD] text-center sora'>4.5 Score, 9 Review</p>
                    </div>
                </div>
                <div className='flex justify-center items-center m-2 lg:m-4'>
                    <div className='p-2'> 
                        <img src={WordPressLogo} alt="Not Found" />
                    </div>
                    <div className='p-2 flex flex-col'>
                        <img src={Stars} alt="Not Found" className='mb-2 lg:mb-4'/>
                        <p className='text-[#EEE5FFBD] text-center sora'>4.5 Score, 9 Review</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ReviewSection;
