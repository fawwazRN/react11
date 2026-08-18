import React from "react";

export default function Santri({ nama, kelas, hobi, aktif }) {
  return (
    <div>
      <h1>nama: {nama}</h1>
      <h1>kelas: {kelas}</h1>
      <h1>hobi: {hobi}</h1>
      <h1>status: {aktif ? "aktif" : "tidak aktif"}</h1>
    </div>
  );
}
