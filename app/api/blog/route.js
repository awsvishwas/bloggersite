import { connectDB } from "@/lib/config/db";
import { NextResponse } from "next/server";
import {writeFile} from 'fs/promises'
import { BlogModel } from "@/lib/models/BlogModel";
import fs from 'fs'


const loadDB = async()=>{
    await connectDB()
}

loadDB()


export async function GET(request){

    const blogId = request.nextUrl.searchParams.get('id')
    if(blogId){
        const blog = await BlogModel.findById(blogId)
        return NextResponse.json({blog:blog})
    }

    else{
        const allBlogs = await BlogModel.find({})
    return NextResponse.json({msg:'API WORKING!!',allBlogs:allBlogs})
    }
}

export async function POST(request){
    const formData = await request.formData()
    const timestamp = Date.now()
    const image = formData.get('image')
    const imageByteData = await image.arrayBuffer()
    const buffer = Buffer.from(imageByteData)
    const path = `./public/${timestamp}_${image.name}`
    await writeFile(path,buffer)
    const imageUrl = `/${timestamp}_${image.name}`

    const blogData = {
        title: `${formData.get('title')}`,
        author: `${formData.get('author')}`,
        description: `${formData.get('description')}`,
        category: `${formData.get('category')}`,
        image: `${imageUrl}`,
    }
    await BlogModel.create(blogData)
    return NextResponse.json({success:true, msg:'Blog Created!!'})
}

export async function DELETE(request){
    const {id} = await request.json()
    const blog = await BlogModel.findById(id)
    fs.unlink(`./public${blog.image}`,()=>{})
    await BlogModel.findByIdAndDelete(id)
    return NextResponse.json({msg:'Blog Deleted!!',success:true})
}