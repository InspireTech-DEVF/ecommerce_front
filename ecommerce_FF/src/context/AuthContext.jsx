import { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [userPayload, setUserPayload] = useState(null);

  const login = (token) => {
    sessionStorage.setItem('token', token); // Cambia localStorage por sessionStorage
    const payload = jwtDecode(token);
    setIsAuth(true);
    setUserPayload(payload);
    console.log('Token stored in sessionStorage:', token); // <-- Agrega esto
  };

  const logout = () => {
    sessionStorage.removeItem('token'); // Cambia localStorage por sessionStorage
    setIsAuth(false);
    setUserPayload(null);
  };

  useEffect(() => {
    const token = sessionStorage.getItem('token'); // Cambia localStorage por sessionStorage
    if (token) {
      const payload = jwtDecode(token);
      setIsAuth(true);
      setUserPayload(payload);
    }
  }, []);

  const data = {
    isAuth,
    userPayload,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };