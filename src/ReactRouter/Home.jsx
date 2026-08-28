import React from "react";
import { Link, NavLink } from "react-router";

export default function Home() {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-black"
          }>
          profile
        </NavLink>
        <NavLink to="/about">about</NavLink>
      </nav>{" "}
      <Link to="/profile">Profile</Link> {/* kalau single page */}
      <a href="http://google.com" target="_blank" rel="noopener noreferrer">
        google
      </a>{" "}
      {/* kalau multi page */}
      <div>Home</div>
    </>
  );
}
