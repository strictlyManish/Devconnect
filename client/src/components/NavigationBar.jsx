import React from 'react'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from "react";
import axios from "../api/axios"
import toast from 'react-hot-toast';

function NavigationBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const logoutController = async () => {
    try {
      const res = await axios.get("auth/logout")
      toast.success('logout')
    } catch (error) {
      
    }
  }

  useEffect(() => {
    const userCookie = document.cookie

    if (userCookie) {
      setIsLoggedIn(true)
    }

  }, []);

  return (
    <div className="px-20 py-5 flex w-screen items-center justify-between text-white fixed">
      <div className="text-2xl">Thought</div>

      <div className="flex gap-10 items-center uppercase font-mono px-5 py-3 rounded backdrop-blur-3xl">
        <NavLink to="/" className={(e) => (e.isActive ? "border-b-2 transition-all" : "")}>
          Feed
        </NavLink>

        <NavLink to="/profile" className={(e) => (e.isActive ? "border-b-2 transition-all" : "")}>
          Profile
        </NavLink>

        <NavLink to="/post" className={(e) => (e.isActive ? "border-b-2 transition-all" : "")}>
          Post
        </NavLink>

        {isLoggedIn ? (
          <button onClick={logoutController} className='bg-gray-700 px-2 py-2 rounded-3xl'>Logout</button>
        ) : (
          <NavLink to="/register" className={(e) => (e.isActive ? "border-b-2 transition-all" : "")}>
            Sign In
          </NavLink>
        )}
      </div>
    </div>
  );
}


export default NavigationBar