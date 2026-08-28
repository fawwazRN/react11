import React, { useEffect, useState } from "react";

export default function LatihanUseEffect() {
  const [nama, setNama] = useState("Ahmad");
  const [angka, setAngka] = useState(0);
  const [status, setStatus] = useState(false);

  function penjumlahan() {
    return setAngka(angka + 1);
  }

  useEffect(() => {
    console.log("Dashboard Santri berhasil dijalankan");
  }, []);

  useEffect(() => {
    console.log(`angka sekarang: ${angka}`);
    document.title = `Angka: ${angka}`;
    if (angka != 0) {
      setStatus(true);
    }
  }, [angka]);

  return (
    <div>
      <h1>Dashboard Santri</h1>
      <input
        type="text"
        placeholder="masukkan namamu..."
        onChange={(e) => setNama(e.target.value)}
      />
      <p>Nama Santri: {nama}</p>
      <p>Halo, {nama}</p>
      <p>Angka: {angka}</p>
      <button onClick={penjumlahan}>Tambah</button>
      <p>
        status:{" "}
        {status === true ? "Angka sudah berubah" : "Belum ada perubahan angka"}
      </p>
      <p></p>
    </div>
  );
}
