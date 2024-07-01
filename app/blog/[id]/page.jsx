"use client";
import React, { useEffect, useState } from "react";
import BackButton from "@/components/BackButton";
import Link from "next/link";
import Footer from "@/components/Footer";
import axios from "axios";
import Image from "next/image";
import { assets } from "@/assets/assets";

const page = ({ params }) => {
  const [blogData, setBlogData] = useState(null);

  const fetchBlogData = async () => {
    const response = await axios.get("/api/blog", {
      params: { id: params.id },
    });
    setBlogData(response.data.blog);
  };
  useEffect(() => {
    fetchBlogData();
  }, []);

  const blogDate = blogData? new Date(blogData.date):null
  return blogData ? (
    <>
      <div className="px-5 py-5 bg-slate-300">
        <div className="flex justify-between items-center lg:px-28 md:px-12">
          <Image width={180} src={assets.logo}></Image>
          <button className="inline-flex items-center border border-black px-3 py-3 shadow-[-7px_7px_0_#000000] ">
            Get Started
            <Image src={assets.arrow} className="ml-4"></Image>
          </button>
        </div>
        <div className="lg:px-24 md:px-12">
          <Link href={"/"}>
            <BackButton />
          </Link>
        </div>

        <div className="text-center mb-24 mx-auto">
          <p className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">
            {blogData.title}
          </p>
        </div>
      </div>
      <Image src={blogData.image} width={1200} height={600} className="mx-auto mt-[-50px]"></Image>
      <div className="px-5 py-5 lg:px-28 md:px-12">
        <div className="flex items-start flex-col gap-2 mx-auto max-w-[1200px]">
        <div className="flex gap-2 items-center">
        <p className=' bg-gray-900 text-white inline-block px-3 py-1 mb-2'>{blogData.category}</p>
        <p className="text-gray-400">{blogData.author}, {blogDate.toDateString()}</p>
        </div>
        <p className=" mx-auto">
            {blogData.description}
          </p>
        
          <div className="my-24 flex flex-col gap-2">
          <p>Share this article on social media.</p>
          <div className="flex gap-2">
            <Image src={assets.facebook_icon} width={50}></Image>
            <Image src={assets.twitter_icon} width={50}></Image>
          </div>
        </div>
        </div>

      </div>
      <Footer />
    </>
  ) : (
    <></>
  );
};

export default page;
