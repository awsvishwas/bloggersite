'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { toast } from 'react-toastify'

const page = () => {

  const [blogsList, setBlogsList] = useState([])

  const fetchBlogList = async()=>{
    const response = await axios.get('/api/blog')
    setBlogsList(response.data.allBlogs)
  }

  const deleteBlog = async(id)=>{
    const response = await axios.delete('/api/blog',{data:{id}})
    if(response.data.success){
      toast.success(response.data.msg)
    }
    else{
      toast.error("error db deletion")
    }
    fetchBlogList()
  }

  useEffect(()=>{
    fetchBlogList()
  },[])
  return (
    <div className='px-5 py-5 mt-10'>
      

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Blog Title
                </th>
                <th scope="col" class="px-6 py-3">
                    Author 
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Image
                </th>
                <th scope="col" class="px-6 py-3">
                    Actions<span class="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody>
          {
            blogsList.map((item,index)=>(
              <tr key={index} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.title}
                </th>
                <td class="px-6 py-4">
                    {item.author} {item._id}
                </td>
                <td class="px-6 py-4">
                    {item.category}
                </td>
                <td class="px-6 py-4">
                    <Image src={`${item.image}`} width={60} height={10} ></Image>
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline ml-4" onClick={()=>deleteBlog(item._id)}>Delete</a>
                </td>
            </tr>
            ))
          }
            
        </tbody>
    </table>
</div>

      
    </div>
  )
}

export default page
