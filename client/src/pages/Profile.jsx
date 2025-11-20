import React, { useEffect, useState } from "react";
import axios from "../api/axios";

function Profile() {
  const [data, setData] = useState(null);

  const getuserinfo = async () => {
    try {
      const res = await axios.get("/user");
      setData(res.data.userinfo);
    } catch (err) {
      console.log("Error fetching user info:", err);
    }
  };

  useEffect(() => {
    getuserinfo();
  }, []);

  if (!data) {
    return (
      <div className="min-h-screen flex justify-center items-center text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full flex flex-col items-center px-6 py-10 bg-[#0f0f0f] text-white gap-10">

      {/* MAIN PROFILE CARD */}
      <div className="max-w-4xl w-full bg-[#1a1a1a] rounded-2xl p-6 md:p-10 flex flex-col md:flex-row gap-8 shadow-xl">

        {/* Profile Image */}
        <div className="flex justify-center md:justify-start">
          <img
            className="h-48 w-48 md:h-64 md:w-64 rounded-xl object-cover shadow-lg"
            src={
              data.avatar ||
              "https://cdn-icons-png.flaticon.com/512/149/149071.png"
            }
            alt="profile"
          />
        </div>

        {/* Info Section */}
        <div className="flex flex-col justify-between font-sans w-full">
          <div className="flex flex-col gap-3">
            <p className="text-2xl font-semibold tracking-wide">{data.username}</p>

            <p className="text-sm md:text-base opacity-90 leading-relaxed">
              {data.bio ||
                "No bio added yet... Add one below!"}
            </p>

            <p className="text-sm md:text-base opacity-75">{data.email}</p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6 md:mt-8">
           
            <button className="px-5 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition font-medium">
              Delete Profile
            </button>
          </div>
        </div>
      </div>

      {/* EDIT FORM */}
      <div className="w-full max-w-3xl bg-[#1c1c1c] p-6 rounded-xl shadow-lg">
        <p className="text-lg font-semibold mb-4">Edit Profile Details</p>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Update username"
            className="p-3 rounded-lg bg-[#2a2a2a] outline-none"
          />

          <input
            type="email"
            placeholder="Update email"
            className="p-3 rounded-lg bg-[#2a2a2a] outline-none"
          />

          <textarea
            placeholder="Update bio"
            className="p-3 rounded-lg bg-[#2a2a2a] outline-none h-32 resize-none"
          ></textarea>

          <button className="px-5 py-3 rounded-lg bg-green-600 hover:bg-green-700 transition font-medium w-fit">
            Save Changes
          </button>
        </form>
      </div>

    </div>
  );
}

export default Profile;
