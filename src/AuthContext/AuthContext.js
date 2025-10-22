import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => sessionStorage.getItem("isAuthenticated") === "true"
  );

  const login = () => {
    setIsAuthenticated(true);
    sessionStorage.setItem("isAuthenticated", "true");
  };

  const logout = () => {
    setIsAuthenticated(false);
    sessionStorage.setItem("isAuthenticated", "false");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
