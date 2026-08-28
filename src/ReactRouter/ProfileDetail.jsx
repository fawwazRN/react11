import React from "react";
import { useParams } from "react-router";

const santri = {
  1: "Ahmad",
  2: "Budi",
  3: "umar",
};

export default function ProfileDetail() {
  const { id } = useParams();

  const name = santri[id];
  return (
    <div>
      ProfileDetail dengan ID: {id}, NAMANYA {name}
    </div>
  );
}
