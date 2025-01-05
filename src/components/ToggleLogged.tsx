// Temporary element for debugging and dev

"use client"

import React from "react";
import { useAuth } from "../context/AuthContext";

export default function ToggleLogged() {
  const { isLogged, toggleLogged } = useAuth();

  return (
    <button
      className="p-2 bg-black text-white fixed bottom-4 right-4 z-50"
      onClick={toggleLogged}
    >
      {isLogged ? "Logout" : "Login"}
    </button>
  );
}
