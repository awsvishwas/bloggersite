import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import Link from 'next/link'

const Sidebar = () => {
  return (
    <div className='flex flex-col w-[240px]'>
        <div className='px-5 py-2 border border-black'>
            <Image src={assets.logo} width={140} className='mx-auto' alt=''></Image>
        </div>
      <div className='h-[100vh] border border-black relative border-t-0'>
        <div className="w-[50%] absolute right-0 sm:w-[80%] mt-10 flex flex-col gap-5">
            <Link href='/admin/addBlog'>
            <div className="flex gap-2 justify-between items-center px-3 py-2 border border-black shadow-[-4px_4px_0_#000]">
                Add Blog <Image src={assets.add_icon} width={30} alt=''></Image>
            </div>
            </Link>
            <Link href='/admin/listBlogs'>
            <div className="flex gap-2 justify-between items-center px-3 py-2 border border-black shadow-[-4px_4px_0_#000]">
                All Blogs <Image src={assets.blog_icon} width={30} alt=''></Image>
            </div>
            </Link>
           <Link href='/admin/subscriptions'>
           <div className="flex gap-2 justify-between items-center px-3 py-2 border border-black shadow-[-4px_4px_0_#000]">
                Subscriptions <Image src={assets.email_icon} width={30} alt=''></Image>
            </div>
           </Link>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
