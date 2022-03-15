/** @format */

import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
// import { useContext } from "react";
import "./Assets/css/main.scss";
import "./Assets/css/main.css";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import Courses from "./Pages/Courses";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { postInfo } from "./features/auth/infoSlice";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Admin from "./Pages/Admin";
import AdminRoute from "./utils/AdminRoute";

const App = () => {
  const [token, setToken] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("admin") === "checked") {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
    setToken(localStorage.getItem("refreshToken"));
    const nineMinutes = 9 * 60 * 1000;
    let interval = setInterval(() => {
      if (token) {
        dispatch(postInfo({ refreshToken: token }));
      }
    }, nineMinutes);
    return () => clearInterval(interval);
  }, [token, dispatch]);

  return (
    <div>
      <AuthProvider>
        <Navbar isAdmin={isAdmin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/courses"
            element={
              <PrivateRoute>
                <Courses />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <AdminRoute>
                <Admin />
              </AdminRoute>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </div>
  );
};

export default App;
