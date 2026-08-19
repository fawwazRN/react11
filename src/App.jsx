import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { Footer as Kaki, Detail } from "./components/Footer";
import Card from "./components/Card";
import MenyimpanData from "./useState/MenyimpanData";
import Praktik from "./useState/Praktik";
import Santri from "./latihan1/Santri";
import PraktikTwo from "./useState/PraktikTwo";
import Basic from "./useRef/Basic";
import Latihan from "./latihan2/Latihan";
import LoginForm from "./formUncontrolledvsControlled/LoginForm";
import LoginFormWithUseRef from "./formUncontrolledvsControlled/LoginFormWithUseRef";
import LoginFormControlled from "./formUncontrolledvsControlled/LoginFormControlled";
import LatihanLogin from "./latihan3/LatihanLogin";

export default function App() {
  return (
    <div className="space-y-5">
      {/*       <Navbar />
      <Hero />
      <Kaki />
      <Detail />
      <div className="justify-between items-center grid grid-cols-3">
        <Card />
        <Card />
        <Card />
      </div>
      <MenyimpanData />
      <Praktik />
      <Santri nama={"ahmad"} aktif={true} hobi={"coding"} kelas={10} />
      <Santri nama={"joni"} aktif={false} hobi={"coding"} kelas={10} />
      <PraktikTwo />
      <Basic />
      <Latihan /> */}
      {/* <LoginForm /> */}
      {/* <LoginFormWithUseRef /> */}
      {/* <LoginFormControlled /> */}
      <LatihanLogin />
    </div>
  );
}
