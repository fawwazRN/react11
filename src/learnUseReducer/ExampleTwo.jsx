import React, { useReducer } from "react";

function reducer(state, action) {
  if (action.type === "pengurangan") {
    return state - 1;
  }
  return state;
}
export default function ExampleTwo() {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h1>{state}</h1>
      {/* <button onClick={() => dispatch()}>tambah 1</button> */}
      <button onClick={() => dispatch({ type: "pengurangan" })}>
        kurang 1
      </button>
    </div>
  );
}

// ! penggunaan useReducer sederhana
/* 
Algoritma
klik tombol -> dispatch() -> reducer() -> state + 1 -> angka berubah */
