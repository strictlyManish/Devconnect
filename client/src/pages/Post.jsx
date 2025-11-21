import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, Smile } from "lucide-react";
import { toast } from 'react-hot-toast';
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';

export default function Post() {
  const { register, handleSubmit, reset, setValue } = useForm();
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();

  const [name,setname] = useState('loading');
  const [email,Setemail] = useState('loading');
  const [url,Seturl] = useState('loading');



  const handleImagePreview = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setValue("image", file);
    setPreview(URL.createObjectURL(file));
  };

  const onSubmit = async ({ title, body, image }) => {
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('body', body);
      formData.append('image', image[0] || image);

      const res = await axios.post("/post", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log(res);
      toast.success("Post created successfully!");
      navigate('/');
      reset();
    } catch (error) {
      console.error(error);
      toast.error("Failed to create post");
    }
  };


  const getuser = async () =>{
    const {data} = await axios.get("/user");

    const {avtar,email,username} = data.userinfo;
    setname(username)
    Seturl(avtar);
    Setemail(email)
  }

  getuser()

  return (
    <div className="min-h-screen text-white flex items-center justify-centerp-4">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Left Section */}
        <div className="space-y-4">

          <label
            htmlFor="fileInput"
            className="bg-zinc-900 rounded-2xl border-2 border-dashed border-zinc-700 h-96 flex flex-col items-center justify-center hover:border-zinc-600 transition-colors cursor-pointer overflow-hidden"
          >
            {preview ? (
              <img
                src={preview}
                alt="Preview"
                className="h-full w-full object-cover rounded-2xl"
              />
            ) : (
              <>
                <div className="bg-zinc-800 rounded-full p-4 mb-4">
                  <Link className="w-8 h-8 text-gray-400" />
                </div>
                <p className="text-gray-300 font-medium mb-1">Upload an image</p>
                <p className="text-gray-500 text-sm">Click to select</p>
              </>
            )}
          </label>

          {/* Hidden File Input */}
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            onChange={handleImagePreview}
            className="hidden"
          />

          <button
            onClick={handleSubmit(onSubmit)}
            className="w-full bg-zinc-900 hover:bg-zinc-800 text-white py-3 rounded-lg transition-colors font-medium"
          >
            Upload
          </button>
        </div>

        {/* Right Section */}
        <div className="space-y-6">
          {/* Title */}
          <input
            type="text"
            placeholder="Add your title"
            {...register("title")}
            className="w-full bg-transparent text-3xl font-bold text-gray-300 placeholder-gray-600 border-0 focus:outline-none"
          />

          {/* User Info */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold">MW</span>
            </div>
            <div>
              <p className="text-white font-medium">{name}</p>
              <p className="text-gray-500 text-sm">{email}</p>
            </div>
          </div>

          <div className="relative">
            <textarea
              placeholder="Tell everyone what your Pin is about"
              {...register("body")}
              className="w-full bg-zinc-900 text-gray-300 placeholder-gray-600 rounded-lg p-4 border border-zinc-800 focus:outline-none focus:border-zinc-700 resize-none h-24"
            />
            <button
              type="button"
              className="absolute bottom-4 right-4 text-gray-500 hover:text-yellow-500"
            >
              <Smile className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}