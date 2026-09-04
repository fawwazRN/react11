import React, { useContext } from "react";
import AboutContext from "./AboutContext";

export default function About() {
  const aboutTitle = useContext(AboutContext);

  return <div>About Title: {aboutTitle}</div>;
}
