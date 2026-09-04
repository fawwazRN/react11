import React, { useState } from "react";
import Profile from "./Profile";

export default function Home() {
  const [nama, setNama] = useState("Fulan");

  function update() {
    setNama("ali");
  }
  return (
    <div>
      <h1>{nama}</h1>
      <button onClick={update}>Update</button>
      <Profile name={nama} />
    </div>
  );
}
