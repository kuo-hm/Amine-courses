import { createContext, useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();


  const [user, setUser] = useState(() =>
    localStorage.getItem("authToken")
      ? localStorage.getItem("authToken")
      : null
  );

  const [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authToken")
      ?localStorage.getItem("authToken")
      : null
  );

  const loginUser = async (e) => {
    e.preventDefault();
    const headers = {
      "Content-Type": "application/json",
    };
    const data = {
      username: e.target.email.value,
      password: e.target.password.value,
    };
    axios
      .post("http://127.0.0.1:8000/api/token/", data, headers)
      .then(function (response) {
          localStorage.setItem("authToken", response.data.access);
            localStorage.setItem("refreshToken", response.data.refresh);
        setAuthTokens(response.data.access);
        setUser(jwt_decode(response.data.access));
        navigate("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const logoutUser = () => {
    localStorage.removeItem("authTokens");
    setAuthTokens(null);
    setUser(null);
    navigate("/login");
  };

 
  const contextData = {
    user,
    loginUser,
    logoutUser,
  };

 
  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
