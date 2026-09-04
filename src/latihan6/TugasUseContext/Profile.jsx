import React, { useContext } from "react";
import { ProfileContext } from "./Context";

export default function Profile() {
  const { nama, setNama } = useContext(ProfileContext);
  return (
    <div className="space-y-1 bg-gray-50 p-4 border border-gray-200 rounded-md">
      <p className="font-medium text-gray-500 text-xs uppercase tracking-wide">
        Informasi Akun
      </p>
      <div className="flex justify-between items-center">
        <span className="text-gray-600 text-sm">Nama Santri:</span>
        <span className="font-semibold text-gray-900 text-sm">
          {nama || "Fulan"}
        </span>
      </div>
    </div>
  );
}
