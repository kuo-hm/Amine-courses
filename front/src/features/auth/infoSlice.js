/** @format */

import {
    createSlice,
    createAsyncThunk,
    createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";

export const infoAdapter = createEntityAdapter();

export const postInfo = createAsyncThunk(
    "login/postLogin",
    async(info, { rejectWithValue }) => {
        const refresh = localStorage.getItem("refreshToken");

        localStorage.removeItem("errorRegister");

        const config = {
            header: {
                "Content-Type": "application/json",
            },
        };
        try {
            await axios
                .post("account/token/refresh", { refresh }, config)
                .then((res) => {
                    localStorage.setItem("authToken", res.data.access);
                    localStorage.setItem("refreshToken", res.data.refresh);
                    return res;
                });
        } catch (error) {
            if (!error.response) {
                throw error;
            }
            localStorage.setItem("errorInfo", error.response.data.error);
            return rejectWithValue(error.response.data);
        }
    }
);

const infoSlice = createSlice({
    name: "info",
    initialState: infoAdapter.getInitialState({ error: null }),
    reducers: {},
    extraReducers: {
        [postInfo.fulfilled]: (state, action) => {},

        [postInfo.rejected]: (state, action) => {
            if (action.payload) {
                state.error = action.payload;
            } else {
                state.error = action.error;
            }
        },
    },
});
export const selectInfoError = (state) => state.info.error;

export default infoSlice.reducer;