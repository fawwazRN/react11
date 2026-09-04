import React, { useState } from "react";
import { ProfileContext } from "./Context";
import Navbar from "./Navbar";
import Profile from "./Profile";

export default function AppUseContext() {
  const [nama, setNama] = useState("");
  return (
    <div className="flex justify-center items-center bg-gray-50 p-4 min-h-screen text-gray-900">
      <ProfileContext.Provider value={{ nama, setNama }}>
        <div className="space-y-4 bg-white shadow-sm p-6 border border-gray-200 rounded-lg w-full max-w-md">
          <div className="space-y-1">
            <label
              htmlFor="nama"
              className="block font-medium text-gray-700 text-sm">
              Nama Lengkap
            </label>
            <input
              id="nama"
              type="text"
              placeholder="Masukkan namamu..."
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              className="px-3 py-2 border border-gray-300 focus:border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-sm"
            />
          </div>

          <Navbar />
          <Profile />

          <button
            onClick={() => setNama("")}
            className="bg-gray-100 hover:bg-gray-200 px-4 py-2 border border-gray-300 rounded-md w-full font-medium text-gray-700 text-sm transition-colors">
            Reset
          </button>
        </div>
      </ProfileContext.Provider>
    </div>
  );
}
