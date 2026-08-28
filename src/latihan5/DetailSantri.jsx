import React from "react";
import { NavLink, useParams } from "react-router";

export default function DetailSantri() {
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
  const { id } = useParams();
  const dataSantri = santri.find((santri) => santri.id == id);
  return (
    <div>
      <p>Id: {dataSantri.id}</p>
      <p>Nama: {dataSantri.nama}</p>
      <p>Kelas: {dataSantri.kelas}</p>
      <NavLink to={"/santri"}>Kembali</NavLink>
    </div>
  );
}
