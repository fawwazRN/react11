import React, { useEffect, useState } from "react";

export default function MenyimpanDataEffect() {
  const [angka, setAngka] = useState(0);
  useEffect(() => {
    // kode yang akan berjalan
    setTimeout(() => {
      console.log("saya dijalankan!");
    }, 5000);
    return () => {
      console.log("saya dibersihkan!");
    };
    console.log(`count berubah jadi: ${angka}`);
  }, [angka]);

  function tambah() {
    console.log(angka + 1);
    setAngka(angka + 1);
  }
  function kurang() {
    console.log(angka - 1);
    setAngka(angka - 1);
  }
  return (
    <div>
      <h1>{angka}</h1>
      <button onClick={tambah}>tambah (+)</button>
      <br />
      <button onClick={kurang}>kurang (-)</button>
    </div>
  );
}
