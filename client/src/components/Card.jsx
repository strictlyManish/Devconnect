import React from "react";
import { Heart, MessageCircle } from "lucide-react";

function Card({data}) {

    const {email,image,title,body} = data;


  return (
    <div className="max-w-sm w-full rounded-2xl shadow-lg bg-gray-900 overflow-hidden  mt-4 text-white">
      {/* Header */}
      <div className="flex items-center gap-3 p-2">
        <img
          src="/mnt/data/Screenshot 2025-11-21 233353.png"
          alt="profile"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <span className="font-semibold">{email}</span>
          <span className=" text-sm font-medium">{title}</span>
        </div>
      </div>

      {/* Image */}
      <div className="w-full h-54 bg-gray-200">
        <img
          src={image}
          alt="post"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4 px-4 py-3 ">
        <Heart className="w-6 h-6" />
        <MessageCircle className="w-6 h-6" />
      </div>

      {/* Likes */}
      <div className="px-4 text-sm font-semibold">
        Liked by <span className="font-bold">Andrew</span> and 360 others
      </div>

      {/* Caption */}
      <p className="px-4 py-2 text-sm  truncate">
        {body}
      </p>
    </div>
  );
}

export default Card