import React, { useRef, useState } from "react";

export default function Latihan() {
  const [nama, setNama] = useState("nama");
  const inputref = useRef();

  function munculkanNama() {
    setNama(inputref.current.value);
  }
  return (
    <div className="flex flex-col justify-start items-center gap-5 bg-gray-400 px-10 py-5 w-100 h-50">
      <input
        type="text"
        placeholder="masukkan nama"
        className="px-2 py-1 border"
        ref={inputref}
      />
      <button
        onClick={munculkanNama}
        className="bg-amber-100 px-2 py-1 rounded-2xl">
        Tampilkan Nama
      </button>
      <h2 className="font-bold">nama: {nama}</h2>
    </div>
  );
}
