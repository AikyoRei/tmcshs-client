import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { verifyToken } from "./utils/token";

export const AuthContext = createContext(null); // ✅ Export AuthContext

const AuthProvider = ({ children }) => {
  const [isTokenValid, setIsTokenValid] = useState(undefined);
  const [isStaff, setIsStaff] = useState(undefined);
  const [userId, setUserId] = useState(undefined);
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    if (token) {
      verifyToken(token)
        .then((response) => {setIsTokenValid(response.isValid); setIsStaff(response.isStaff); setUserId(response.userId)})
        .catch(() => setIsTokenValid(false)); // Handle errors
    } else {
        setIsTokenValid(false)
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ isTokenValid, setIsTokenValid, isStaff, setIsStaff, userId, setUserId, token, setToken}}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
