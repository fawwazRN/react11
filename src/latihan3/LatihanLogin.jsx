import React, { useRef, useState } from "react";

const LatihanLogin = () => {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const passRef = useRef();
  const userRef = useRef();

  function logins(event) {
    event.preventDefault();
    console.log(
      `username: ${userRef.current.value}, pass: ${passRef.current.value}`,
    );
  }
  return (
    <div className="flex justify-center items-center bg-white mx-auto p-8">
      <div className="flex items-center gap-12 w-full h-full">
        <div className="relative rounded-3xl w-1/2 h-full overflow-hidden">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj3vwpROSO9EPR5EM5LgE6aWhkfsvg5-mjzXiZLozfrVhaIHkfuQr3StoB&s=10" // Ganti dengan path gambar Anda
            alt="Wooden Chair"
            className="w-full h-full object-cover"
          />
          <div className="right-0 bottom-0 left-0 absolute p-12 text-white">
            <h1 className="mb-2 font-bold text-4xl">
              Pondok Tahfizh Plus Abudzar
            </h1>
            <p className="text-xl">Hafizh Quran Mahir IT</p>
          </div>
        </div>
        <div className="relative flex flex-col justify-center items-center px-8 py-6 h-full">
          <div className="mx-auto w-105">
            <div className="flex flex-col justify-center items-center mb-8 text-center">
              <p className="mb-6 font-medium text-gray-700 text-lg">
                Welcome to Pondok Tahfizh Plus Abudzar
              </p>

              <div className="bg-[#FBEEDC] p-1.5 rounded-full w-full max-w-[320px]">
                <button className="bg-[#B09373] py-3 rounded-full w-1/2 font-medium text-white text-center">
                  Login
                </button>
                <button className="py-3 rounded-full w-1/2 font-medium text-[#B09373] text-center">
                  Register
                </button>
              </div>
            </div>
            <p className="mb-8 text-gray-500 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            {/* form */}
            <form className="space-y-6" onSubmit={logins}>
              {/* username */}
              <div className="flex flex-col gap-2">
                <p className="font-medium text-black text-sm">Username</p>
                <input
                  ref={userRef}
                  type="text"
                  placeholder="Enter your Username"
                  onChange={(e) => setUsername(e.target.value)}
                  className="px-6 py-3.5 border border-gray-300 focus:border-[#B09373] rounded-full focus:outline-none w-full text-sm placeholder-gray-400"
                />
              </div>
              {/* pass */}
              <div className="flex flex-col gap-2">
                <p className="font-medium text-black text-sm">Password</p>
                <div className="relative">
                  <input
                    ref={passRef}
                    type="password"
                    placeholder="Enter your Password"
                    onChange={(e) => setPass(e.target.value)}
                    className="px-6 py-3.5 pr-12 border border-gray-300 focus:border-[#B09373] rounded-full focus:outline-none w-full text-sm placeholder-gray-400"
                  />
                </div>
              </div>

              {/* Button Submit */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="bg-[#B09373] hover:bg-[#997f62] shadow-sm py-4 rounded-full w-full font-semibold text-white text-base transition duration-150">
                  Login
                </button>
              </div>
            </form>
          </div>
          <div>
            <h1>{username}</h1>
            <h1>{pass}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatihanLogin;
