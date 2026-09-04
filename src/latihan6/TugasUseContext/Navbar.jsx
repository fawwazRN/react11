import React, { useContext } from "react";
import { ProfileContext } from "./Context";

export default function Navbar() {
  const { nama, setNama } = useContext(ProfileContext);
  return (
    <nav className="flex justify-between items-center mb-4 pb-3 border-gray-100 border-b">
      <span className="font-semibold text-gray-400 text-xs uppercase tracking-wider">
        Status Login
      </span>
      <div className="font-medium text-gray-800 text-sm">
        Selamat datang,{" "}
        <span className="font-semibold text-blue-600">{nama || "Fulan"}</span>
      </div>
    </nav>
  );
}
