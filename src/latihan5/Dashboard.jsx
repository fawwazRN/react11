import React from "react";
import { NavLink } from "react-router";

export default function Dashboard() {
  return (
    <div>
      <nav className="flex gap-4 bg-amber-200">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/santri">Santri</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
      <h1>DASHBOARD SANTRI</h1>
      <p>Selamat datang di dashboard santri</p>
      <NavLink to={"/santri"}>Daftar Santri</NavLink>
    </div>
  );
}
