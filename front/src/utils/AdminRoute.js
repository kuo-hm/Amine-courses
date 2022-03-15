/** @format */

import { Route, Redirect, Navigate, Outlet } from "react-router-dom";
import { useContext, useState } from "react";
import jwt_decode from "jwt-decode";

const AdminRoute = ({ children, ...rest }) => {
    const [user, setUser] = useState(() =>
        localStorage.getItem("authToken") ? localStorage.getItem("authToken") : null
    );
    if (user) {
        var decoded = jwt_decode(user);
        var admin = decoded.check;
        if (admin) {
            localStorage.setItem("admin", "checked");
            return children;
        } else {
            localStorage.removeItem("admin");

            return <Navigate to = "/courses" / > ;
        }
    }
    return <Navigate to = "/courses" / > ;
    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
};

export default AdminRoute;