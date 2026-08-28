import React from "react";
import { NavLink } from "react-router";

export default function DaftarSantri() {
  const santri = [
    {
      id: 1,
      nama: "Ahmad",
      kelas: "XI",
    },
    {
      id: 2,
      nama: "Ali",
      kelas: "X",
    },
    {
      id: 3,
      nama: "Umar",
      kelas: "XII",
    },
  ];
  return (
    <div>
      <nav className="flex gap-4 bg-amber-200">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/santri">Santri</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
      <h1>Daftar Santri</h1>
      {santri.map((santri) => {
        return (
          <div key={santri.id}>
            <p>Nama: {santri.nama}</p>
            <p>Kelas: {santri.kelas}</p>
            <NavLink to={`./${santri.id}`}>Detail</NavLink>
          </div>
        );
      })}
    </div>
  );
}
