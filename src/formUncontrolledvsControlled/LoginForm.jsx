import React from "react";

export default function LoginForm() {
  const handlerSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.elements.password.value);
  };
  return (
    <div>
      <form
        className="space-y-4 bg-white shadow-md mx-auto mt-10 p-6 border border-gray-100 rounded-xl max-w-xs"
        onSubmit={handlerSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="bg-gray-50 focus:bg-white px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-gray-800 placeholder:text-gray-400 text-sm transition-all"
        />

        <input
          type="password"
          name="password"
          id=""
          placeholder="Password"
          className="bg-gray-50 focus:bg-white px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-gray-800 placeholder:text-gray-400 text-sm transition-all"
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 shadow-sm px-4 py-2.5 rounded-lg w-full font-semibold text-white text-sm active:scale-[0.98] transition-all duration-150">
          Login
        </button>
      </form>
    </div>
  );
}
