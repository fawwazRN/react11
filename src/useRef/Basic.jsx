import React, { useRef } from "react";

export default function Basic() {
  const inputRef = useRef();
  function fokusInput() {
    inputRef.current.focus();
  }
  return (
    <div>
      <input ref={inputRef} />
      <button onClick={fokusInput}>menyuruh fokus ke input</button>
    </div>
  );
}
