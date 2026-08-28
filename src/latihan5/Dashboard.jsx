import React from "react";
import { NavLink } from "react-router";

export default function Dashboard() {
  return (
    <div>
      <h1>DASHBOARD SANTRI</h1>
      <p>Selamat datang di dashboard santri</p>
      <NavLink to={"/santri"}>Daftar Santri</NavLink>
    </div>
  );
}
