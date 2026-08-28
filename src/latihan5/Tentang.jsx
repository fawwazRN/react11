import React from "react";
import { NavLink } from "react-router";

export default function Tentang() {
  return (
    <div>
      <nav className="flex gap-4 bg-amber-200">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/santri">Santri</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
      <h1>Tentang pondok</h1>
      <p>Website Dashboard Santri dibuat sebagai latihan React Router.</p>
    </div>
  );
}
