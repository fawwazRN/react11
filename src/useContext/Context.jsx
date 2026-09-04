import React, { createContext, useState } from "react";
import About from "./About";
import AboutContext from "./AboutContext";
import Contact from "./Contact";
import Testimoni from "./Testimoni";

export default function Context() {
  const [title, setTitle] = useState("Tentang Website");

  function changeTitle() {
    setTitle("Tentang Pondok Santri");
  }
  return (
    <div>
      <AboutContext.Provider value={{ title, setTitle }}>
        <About />
        <Contact />
        <Testimoni />
      </AboutContext.Provider>
    </div>
  );
}
