import Image from 'next/image'
import React from 'react'
import { assets } from '@/assets/assets'

const Footer = () => {
  return (
    <div className='flex justify-around items-start bg-gray-900 text-white px-5 py-5'>
        <Image src={assets.logo_light} width={180}></Image>
        <p>Copyright 2024. All Rights Reserverd</p>
        <div className='flex flex-col gap-2 items-center'>
            <p>Follow us on Social Media</p>
            <div className='flex gap-1'>
                <Image src={assets.googleplus_icon} width={50}></Image>
                <Image src={assets.facebook_icon} width={50}></Image>
                <Image src={assets.twitter_icon} width={50}></Image>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
