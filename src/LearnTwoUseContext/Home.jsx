import React, { useState } from "react";
import { ProfileContext } from "./ProfileContext";
import ProfileDetail from "./ProfileDetail";

export default function Home() {
  const [name, setName] = useState("Fulan");
  return (
    <ProfileContext.Provider value={{ name, setName }}>
      <div>
        <h1>Ini Home</h1>
        <ProfileDetail />
      </div>
    </ProfileContext.Provider>
  );
}
