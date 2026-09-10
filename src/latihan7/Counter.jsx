import React, { useReducer } from "react";

function reducer(angka, action) {
  if (action.type === "tambah") {
    return angka + 1;
  } else if (action.type === "kurang") {
    return angka - 1;
  } else if (action.type === "reset") {
    return (angka = 0);
  }
  return angka;
}
export default function Counter() {
  const [angka, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h1>Angka: {angka}</h1>
      <button onClick={() => dispatch({ type: "tambah" })}>Tambah</button>
      <br />
      <button onClick={() => dispatch({ type: "kurang" })}>Kurang</button>
      <br />
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}
