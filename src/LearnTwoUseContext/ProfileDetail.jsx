import React, { useContext } from "react";
import { ProfileContext } from "./ProfileContext";

export default function ProfileDetail() {
  const { name, setName } = useContext(ProfileContext);
  return (
    <div>
      <h1>Ini Profile Detail</h1>
      <h1>Nama santri = {name}</h1>
      <button onClick={() => setName("budi")}>Ganti nama</button>
    </div>
  );
}
