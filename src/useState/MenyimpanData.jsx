import React, { useState } from "react";

export default function MenyimpanData() {
  const [angka, setAngka] = useState(0);

  function tambah() {
    console.log(angka + 1);
    setAngka(angka + 1);
  }
  return (
    <div>
      <h1>{angka}</h1>
      <button onClick={tambah}>+</button>
    </div>
  );
}
