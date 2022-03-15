/** @format */

import {
    createSlice,
    createAsyncThunk,
    createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";

export const registerAdapter = createEntityAdapter();

export const postRegister = createAsyncThunk(
    "register/postRegister",
    async(user, { rejectWithValue }) => {
        const email = user.email;
        const password = user.password;
        const username = user.username;
        const first_name = user.first_name;
        const last_name = user.last_name;
        const password2 = user.password2;
        localStorage.removeItem("errorRegister");

        const config = {
            header: {
                "Content-Type": "application/json",
            },
        };
        try {
            await axios
                .post(
                    "account/register", { username, email, password, password2, first_name, last_name },
                    config
                )
                .then((res) => {
                    if (res.data.response === "successfully registered new user.") {
                        return res;
                    } else if (res.data.email[0]) {
                        localStorage.setItem("errorRegister", res.data.email[0]);
                    } else if (res.data.username[0]) {
                        localStorage.setItem("errorRegister", res.data.username[0]);
                    } else {
                        localStorage.removeItem("errorRegister");
                    }
                });
        } catch (error) {
            if (!error.response) {
                throw error;
            }
            localStorage.setItem("errorRegister", error.response.data.error);
            return rejectWithValue(error.response.data);
        }
    }
);

const loginSlice = createSlice({
    name: "register",
    initialState: registerAdapter.getInitialState({ error: null }),
    reducers: {},
    extraReducers: {
        [postRegister.fulfilled]: (state, action) => {},

        [postRegister.rejected]: (state, action) => {
            if (action.payload) {
                state.error = action.payload;
            } else {
                state.error = action.error;
            }
        },
    },
});

export const selectRegisterError = (state) => state.register.error;

export default loginSlice.reducer;