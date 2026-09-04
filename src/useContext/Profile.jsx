import React from "react";
import ProfileDetail from "./ProfileDetail";

export default function Profile({ name }) {
  return (
    <div>
      <h1>Profile</h1>
      <ProfileDetail name={name} />
    </div>
  );
}
