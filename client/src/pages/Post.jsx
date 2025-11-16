import React, { useState } from 'react';
import {  Link, Info, Smile } from 'lucide-react';

export default function Post() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [destinationLink, setDestinationLink] = useState('');
  const [publishTiming, setPublishTiming] = useState('immediate');

  return (
    <div className="min-h-screen bg-black text-white flex items-center  justify-center">
      <div className="max-w-7xl mx-auto">
      
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Image Upload */}
          <div className="space-y-4">
            <div className="bg-zinc-900 rounded-2xl border-2 border-dashed border-zinc-700 h-96 flex flex-col items-center justify-center hover:border-zinc-600 transition-colors cursor-pointer">
              <div className="bg-zinc-800 rounded-full p-4 mb-4">
                <Link className="w-8 h-8 text-gray-400" />
              </div>
              <input type="text" />
              <p className="text-gray-300 font-medium mb-1">Paste image or your post link</p>
              <p>file url</p>
              <br />
              <br />
              <input type="text" className='w-fit outline-0' placeholder='Paste url'  />
              
            </div>
            
            <button className="w-full bg-zinc-900 hover:bg-zinc-800 text-white py-3 rounded-lg transition-colors font-medium">
              Upload
            </button>
          </div>

          {/* Right Side - Form */}
          <div className="space-y-6">
            {/* Title Input */}
            <div>
              <input
                type="text"
                placeholder="Add your title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full bg-transparent text-3xl font-bold text-gray-300 placeholder-gray-600 border-0 focus:outline-none focus:ring-0 px-0"
              />
            </div>

            {/* User Info */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-linear-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">MW</span>
              </div>
              <div>
                <p className="text-white font-medium">Manish Kumar</p>
                <p className="text-gray-500 text-sm">127.7k followers</p>
              </div>
            </div>

            {/* Description */}
            <div className="relative">
              <textarea
                placeholder="Tell everyone what your Pin is about"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full bg-zinc-900 text-gray-300 placeholder-gray-600 rounded-lg p-4 border border-zinc-800 focus:outline-none focus:border-zinc-700 resize-none h-24"
              />
              <button className="absolute bottom-4 right-4 text-gray-500 hover:text-yellow-500">
                <Smile className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}