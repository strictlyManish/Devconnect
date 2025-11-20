import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import { useForm } from "react-hook-form";

function Profile() {
  const [data, setData] = useState(null);
  const { register, handleSubmit, reset } = useForm();

  const getuserinfo = async () => {
    try {
      const res = await axios.get("/user");
      setData(res.data.userinfo);

      reset({
        username: res.data.userinfo.username,
        email: res.data.userinfo.email,
        bio: res.data.userinfo.bio,
      });
    } catch (err) {
      console.log("Error:", err);
    }
  };

  

  const onSubmit = async (formData) => {
    try {
      await axios.put("/user/update", formData);
      alert("Profile updated!");
      getuserinfo();
    } catch (err) {
      console.log(err);
    }
  };

  if (!data) {
    return (
      <div className="min-h-screen flex justify-center items-center text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen w-screen bg-[#0f0f0f] text-white px-6 py-10 flex justify-center items-center font-medium">

      {/* WRAPPER: Side-by-side layout */}
      <div className="flex gap-15">

        {/* ----------- PROFILE CARD ----------- */}
        <div className="bg-[#1a1a1a] rounded-2xl p-6 shadow-xl flex flex-col gap-6">

          {/* Profile Image */}
          <div className="flex justify-center">
            <img
              className="h-48 w-48 md:h-60 md:w-60 rounded-xl object-cover shadow-lg"
              src={data.avatar || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
              alt="profile"
            />
          </div>

          <div className="flex flex-col gap-2 text-center md:text-left">
            <p className="text-2xl font-semibold uppercase">@{data.username}</p>

            <p className="text-sm opacity-80 leading-relaxed">
              {data.bio || "No bio added yet..."}
            </p>

            <p className="text-sm opacity-60">{data.email}</p>
          </div>

            <button className="px-5 py-2 rounded-lg bg-red-500 hover:bg-red-700 transition">
              Delete
            </button>
        </div>

        {/* ----------- EDIT FORM ----------- */}
        <div className="bg-[#1c1c1c] p-6 rounded-2xl shadow-xl w-[40vw]">
          <p className="text-xl font-semibold mb-4">Edit Profile Details</p>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">

            <div>
              <label className="opacity-70 text-sm">Username</label>
              <input
                type="text"
                {...register("username")}
                className="w-full p-3 mt-1 bg-[#2a2a2a] rounded-lg outline-none"
              />
            </div>
            <div>
              <label className="opacity-70 text-sm">Username</label>
              <input
                type="file"
                {...register("file")}
                className="w-full p-3 mt-1 bg-[#2a2a2a] rounded-lg outline-none"
              />
            </div>

            <div>
              <label className="opacity-70 text-sm">Email</label>
              <input
                type="email"
                {...register("email")}
                className="w-full p-3 mt-1 bg-[#2a2a2a] rounded-lg outline-none"
              />
            </div>

            <div>
              <label className="opacity-70 text-sm">Bio</label>
              <textarea
                {...register("bio")}
                placeholder="update you bio.."
                className="w-full p-3 mt-1 bg-[#2a2a2a] rounded-lg outline-none h-28"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-fit px-5 py-3 rounded-lg bg-green-600 hover:bg-green-700 transition"
            >
              Save Changes
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default Profile;
