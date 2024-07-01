"use client";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const page = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
    category: "",
    image: null,
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData((prev) => ({ ...prev, [name]: value }));
    console.log(formData);
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append("title", formData.title);
    data.append("author", formData.author);
    data.append("description", formData.description);
    data.append("category", formData.category);
    data.append("image", formData.image);
    try {
      const response = await axios.post("/api/blog", data);
      toast.success(response.data.msg);
      setFormData({
        title: "",
        author: "",
        description: "",
        category: "",
        image: null,
      })
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="px-5 py-5">
      <form
        className="mx-auto lg:max-w-[700px] max-w-[550px]"
        onSubmit={onSubmitHandler}
      >
        <div className="mx-auto flex flex-col gap-2">
          <div className="flex">
            <label
              htmlFor="title"
              className="p-2 bg-gray-900 text-white w-[16%] text-center"
            >
              Blog Title
            </label>
            <input
              name="title"
              type="text"
              className="w-full pl-2 py-2 border border-gray-500"
              onChange={onChangeHandler}
              value={formData.title}
            />
          </div>
          <div className="flex">
            <label
              htmlFor="author"
              className="p-2 bg-gray-900 text-white w-[16%] text-center"
            >
              Author
            </label>
            <input
              name="author"
              type="text"
              className="w-full pl-2 py-2 border border-gray-500"
              onChange={onChangeHandler}
              value={formData.author}
            />
          </div>
        </div>
        <div className="mt-2 flex flex-col">
          <label htmlFor="description" className="p-2 ">
            {" "}
            Description
          </label>
          <textarea
            name="description"
            id=""
            rows={5}
            className="py-2 pl-2 w-full border border-gray-500"
            onChange={onChangeHandler}
            value={formData.description}
          ></textarea>
        </div>

        <div className="flex w-full mt-2 cursor-pointer">
          <label
            htmlFor="image"
            className="p-2 bg-gray-900 text-white w-[16%] text-center"
          >
            Blog Image
          </label>
          <input
            id="image"
            name="image"
            type="file"
            className="p-2 border-gray-500 border"
            onChange={(e) => {
              const file = e.target.files[0];
              setFormData((prevFormData) => ({ ...prevFormData, image: file }));
            }}
          />
        </div>
        <label
          htmlFor="category"
          className="p-2 bg-gray-900 text-white w-[16%] text-center"
        >
          Category
        </label>
        <select
          name="category"
          id=""
          className="p-2 bg-gray-50 border text-gray-900 text-sm mt-5"
          onChange={onChangeHandler}
        >
          <option value="">Select a Category</option>
          <option value="Technology">Technology</option>
          <option value="Lifestyle">Lifestyle</option>
          <option value="Startup">Startup</option>
        </select>

        <div className="mt-20">
          <button
            className="w-[120px] px-3 py-2 bg-gray-950 text-white"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default page;
