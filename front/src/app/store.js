import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "../features/courses/courseSlice";
import loggedReducer from "../features/logged/loggedSlice";
export const store = configureStore({
    reducer: {
        courses: coursesReducer,
        logged: loggedReducer,

    },
});