import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Navbar = () => {
  return (
<div className="px-5 py-5">
<div className='flex justify-between items-center lg:px-28 md:px-12'>
    <Image width={180} src={assets.logo}></Image>
    <button className='inline-flex items-center border border-black px-3 py-3 shadow-[-7px_7px_0_#000000] '>
        Get Started 
        <Image src={assets.arrow} className='ml-4'></Image>
        </button>
</div>
</div>
  )
}

export default Navbar
