import React, { useState } from "react";

export default function ExampleOne() {
  const [number, setNumber] = useState(0);

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Tambah 1</button>
      <button onClick={() => setNumber(number - 1)}>Kurang 1</button>
      <button onClick={() => setNumber(number + 5)}>Tambah 5</button>
      <button onClick={() => setNumber(number - 5)}>Kurang 5</button>
    </div>
  );
}
