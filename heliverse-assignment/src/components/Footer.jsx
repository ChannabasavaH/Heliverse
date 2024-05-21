import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full bg-gradient-to-r from-orange-500 to-purple-500 flex flex-wrap justify-center lg:justify-between items-center'>
        <div className='flex justify-center items-center lg:ml-8'>
            <p className='p-4 lg:p-6 text-[#EEE5FFBD] outfit  text-sm lg:text-lg'>© 2023 Copywrite. All rights reserved by QodeMatrix</p>
        </div>
        <div className='flex justify-center items-center lg:mr-8'>
            <p className='p-4 lg:p-6 text-[#EEE5FFBD] outfit  text-sm lg:text-lg'>Documentation</p>
            <p className='p-4 lg:p-6 text-[#EEE5FFBD] outfit text-sm lg:text-lg'>Support</p>
        </div>
    </footer>
  )
}

export default Footer
