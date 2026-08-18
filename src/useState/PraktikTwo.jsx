import React, { useState } from "react";

export default function PraktikTwo() {
  const [name, setName] = useState("Ali");
  function fulan() {
    setName("Fulan");
  }
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={fulan}>Change Name</button>
    </div>
  );
}
