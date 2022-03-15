/** @format */

import { Route, Redirect, Navigate, Outlet } from "react-router-dom";
import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";

const PrivateRoute = ({ children, ...rest }) => {
    const [user, setUser] = useState(() =>
        localStorage.getItem("authToken") ? localStorage.getItem("authToken") : null
    );
    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return user ? children : < Navigate to = "/login" / > ;
};

export default PrivateRoute;