'use client'
import React, { useState,useEffect } from 'react'
import axios from 'axios'
import BlogItem from './BlogItem'
const BlogList = () => {
    const [menu,setMenu] = useState('All')
    const [blogsList, setBlogsList] = useState([])

    const fetchBlogList = async()=>{
      const response = await axios.get('/api/blog')
      setBlogsList(response.data.allBlogs)
    }

    useEffect(()=>{
        fetchBlogList()
      },[])

  return (
    <div className=''>
        <div className="flex items-center justify-center mt-10 gap-6">
            <button className={menu==='All'?'px-4 py-1 bg-gray-900 text-white rounded-sm':''}
            onClick={()=>setMenu('All')}>All</button>
            <button className={menu==='Technology'?'px-4 py-1 bg-gray-900 text-white rounded-sm':''}
            onClick={()=>setMenu('Technology')}>Technology</button>
            <button className={menu==='Lifestyle'?'px-4 py-1 bg-gray-900 text-white rounded-sm':''}
            onClick={()=>setMenu('Lifestyle')}>Lifestyle</button>
            <button className={menu==='Startup'?'px-4 py-1 bg-gray-900 text-white rounded-sm':''}
            onClick={()=>setMenu('Startup')}>Startup</button>
        </div>

        <div className="flex flex-wrap gap-6 gap-y-10 my-20 xl:mx-20 justify-center items-start">
            {
                blogsList.filter((item)=>menu==='All'?true:item.category===menu).map((item,index)=>{
                    return <BlogItem key={index} image={item.image} title={item.title} desc={item.description} date={item.date} category={item.category} id={item._id}/>
                })
            }
        </div>

      
    </div>
  )
}

export default BlogList

//