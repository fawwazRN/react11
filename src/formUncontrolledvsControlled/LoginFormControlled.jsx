import React, { useState } from "react";

export default function LoginFormControlled() {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const [phone, setPhone] = useState("");

  function telp(event) {
    setPhone(event.target.value);
  }
  return (
    <div>
      <form className="space-y-4 bg-white shadow-md mx-auto mt-10 p-6 border border-gray-100 rounded-xl max-w-xs">
        <input
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          type="text"
          name="username"
          placeholder="Username"
          className="bg-gray-50 focus:bg-white px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-gray-800 placeholder:text-gray-400 text-sm transition-all"
        />

        <input
          type="password"
          name="password"
          onChange={(event) => setPass(event.target.value)}
          id=""
          placeholder="Password"
          className="bg-gray-50 focus:bg-white px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-gray-800 placeholder:text-gray-400 text-sm transition-all"
        />
        <input
          type="number"
          name="telp"
          onChange={telp}
          id=""
          placeholder="No. Telp"
          className="bg-gray-50 focus:bg-white px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-gray-800 placeholder:text-gray-400 text-sm transition-all"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 shadow-sm px-4 py-2.5 rounded-lg w-full font-semibold text-white text-sm active:scale-[0.98] transition-all duration-150">
          Login
        </button>
        <h2>{username}</h2>
        <h2>{pass}</h2>
        <h2>{phone}</h2>
      </form>
    </div>
  );
}
