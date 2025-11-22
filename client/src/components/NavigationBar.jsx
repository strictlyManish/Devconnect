import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "../api/axios";
import toast from "react-hot-toast";
import { BadgePlus, CloudUpload, ContactRound, LogIn, LogOut, Telescope } from "lucide-react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

export default function NavigationBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logoutController = async () => {
    try {
      await axios.get("auth/logout");
      toast.success("Logout Successful");
    } catch (error) {
      toast.error("Logout Failed");
    }
  };

  useEffect(() => {
    if (document.cookie.includes("user")) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className="px-20 py-5 flex w-screen items-center justify-between text-white fixed">
      <div className="text-4xl" style={{ fontFamily: 'Momo Trust Display' }}>Thought.</div>

      <div className="flex gap-10 items-center uppercase font-mono px-5 py-3 rounded backdrop-blur-3xl">

        {/* Home Icon */}
        <NavLink to="/" className={(e) => (e.isActive ? "scale-105 transition-all text-pink-500" : "")}>
          <Telescope
            className="outline-0"
            data-tooltip-id="navbar-tooltip"
            data-tooltip-content="explore"
            data-tooltip-place="bottom"
          />
        </NavLink>

        {/* Profile */}
        <NavLink to="/profile" className={(e) => (e.isActive ? "scale-105 transition-all text-pink-500" : "")}>
          <ContactRound
            className="outline-0"
            data-tooltip-id="navbar-tooltip"
            data-tooltip-content="profile"
          />
        </NavLink>

        {/* Post */}
        <NavLink to="/post" className={(e) => (e.isActive ? "scale-105 transition-all text-pink-500" : "")}>
          <CloudUpload
            className="outline-0"
            data-tooltip-id="navbar-tooltip"
            data-tooltip-content="Upload a Post"
          />
        </NavLink>

        {/* Login / Logout */}
        {isLoggedIn ? (
          <button

          >
            login
          </button>
        ) : (
          <NavLink
            to="/register"
            className={(e) => (e.isActive ? "scale-105 transition-all" : "")}
            data-tooltip-id="navbar-tooltip"
            data-tooltip-content="Sign In"
          >
            Sign In
          </NavLink>
        )}

      </div>

      <Tooltip id="navbar-tooltip" />
    </div>
  );
}
