import React from "react";
import { NavLink } from "react-router";

export default function NotFound() {
  return (
    <div>
      <p>HALAMAN 404</p>
      <NavLink to={"/"}>Kembali ke dashboard</NavLink>
    </div>
  );
}
