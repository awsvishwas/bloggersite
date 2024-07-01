import React from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'

const BlogItem = ({title,image,desc,category,id,date}) => {
  const blogDate = new Date(date)
  return (
    <div className='max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0_#000000] h-[425px]'>
        <Link href={`/blog/${id}`}>
        <Image src={image} width={400} height={400}></Image>
        </Link>
        <div className="p-5 ">
        <p className=' bg-gray-900 text-white inline-block px-3 py-1 mb-2'>{category}</p>
        <p className='text-xl text-black tracking-tight font-medium mb-2'>{title}</p>
        <p className='tracking-tight text-sm text-gray-400 mb-2' >{blogDate.toDateString()}</p>
        <p className='tracking-tight text-sm text-gray-700 mb-2' >{desc.substring(0,75)+'...'}</p>
        <Link href={`/blog/${id}`}>
        <button className='flex gap-2 items-center'>Read More <Image src={assets.arrow} width={10}></Image></button>
        </Link>
        </div>
      
    </div>
  )
}

export default BlogItem
