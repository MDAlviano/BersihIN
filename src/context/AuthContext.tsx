// Temporary element for debugging and dev

"use client";

import React, { createContext, useContext, useState } from "react";

type AuthContextType = {
  isLogged: boolean;
  toggleLogged: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);

  const toggleLogged = () => {
    setIsLogged((prev) => !prev);
  };

  return (
    <AuthContext.Provider value={{ isLogged, toggleLogged }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
