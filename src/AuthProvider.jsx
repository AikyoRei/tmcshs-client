import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { verifyToken } from "./utils/token";

export const AuthContext = createContext(null); // ✅ Export AuthContext

const AuthProvider = ({ children }) => {
  const [isTokenValid, setIsTokenValid] = useState(undefined);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      verifyToken(token)
        .then((response) => setIsTokenValid(response))
        .catch(() => setIsTokenValid(false)); // Handle errors
    } else {
        setIsTokenValid(false)
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isTokenValid, setIsTokenValid }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
