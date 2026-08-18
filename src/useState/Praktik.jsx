import React, { useState } from "react";

export default function Praktik() {
  const [number, setNumber] = useState(0);

  function Penjumlahan() {
    setNumber(number + 1);
  }
  function PenjumlahanDua() {
    setNumber(number + 2);
  }
  return (
    <div>
      <h1>Nilai: {number}</h1>
      <button onClick={Penjumlahan}>Tambah 1</button>
      <br />
      <button onClick={PenjumlahanDua}>Tambah 2</button>
      <br />
      <button onClick={() => setNumber(number + 3)}>Tambah 3</button>
    </div>
  );
}
