import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'


const BackButton = () => {
  return (
    <button className='flex gap-2 px-3 py-1 font-medium items-center border border-black shadow-[-3px_3px_0_#000] m-6'>
        <Image src={assets.arrow} className='rotate-180'></Image>
        Back
    </button>
  )
}

export default BackButton
