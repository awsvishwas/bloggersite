import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Header = () => {
  return (
    <div className='px-5 py-5'>

        <div className='text-center my-8'>
            <h1 className='text-3xl font-medium sm:text-5xl'>Latest Blogs</h1>
            <p className='mt-10 m-auto max-w-[740px] text-xs sm:text-base'>
            Welcome to our vibrant blog, where curiosity meets creativity! Dive into a world of compelling stories, 
            fresh ideas, and thought-provoking insights. 
            Here, every post is a journey waiting to be explored—join us and let your imagination soar!
            </p>
        </div>
        <form className='scale-75 sm:scale-100 flex justify-between max-w-[500px] mx-auto'>
            <div className='flex mx-auto'>
            <input type="email" name="email" placeholder='Email' className='pl-4 w-[400px] border border-black outline-none shadow-[-7px_7px_0_#000000] '/>
            <button className='px-4 py-4 bg-gray-900 text-white'>Subscribe</button>
            </div>
        </form>

      
    </div>
  )
}

export default Header
