import React, { useContext } from "react";
import AboutContext from "./AboutContext";

export default function Contact() {
  const contact = useContext(AboutContext);
  return <div>Contact: {contact}</div>;
}
