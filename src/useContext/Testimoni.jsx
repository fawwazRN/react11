import React, { useContext } from "react";
import AboutContext from "./AboutContext";

export default function Testimoni() {
  const { title, setTitle } = useContext(AboutContext);
  return <div>Testimoni: {title}</div>;
}
