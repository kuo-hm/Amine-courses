/** @format */

import {
    createSlice,
    createAsyncThunk,
    createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "../../api/api";

export const codegenAdapter = createEntityAdapter();

export const fetchCodegen = createAsyncThunk(
    "codegenSlice/fetchCodegen",
    async(email, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                `account/gen_code`, { email }, {
                    headers: {
                        "content-type": "application/json",
                        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
                    },
                }
            );
            if (response.status === 202) {
                sessionStorage.removeItem("error");
                // window.location.reload(false);
            }
            return response.data;
        } catch (error) {
            if (!error.response) {
                throw error;
            }

            return rejectWithValue(error.response.data);
        }
    }
);

const codegenSlice = createSlice({
    name: "codegen",
    initialState: codegenAdapter.getInitialState({ error: null }),
    reducers: {},
    extraReducers: {
        [fetchCodegen.fulfilled]: (state, action) => {
            codegenAdapter.setAll(state, action.payload);
        },

        [fetchCodegen.rejected]: (state, action) => {
            if (action.payload) {
                state.error = action.payload.status_message;
            } else {
                state.error = action.error;
            }
        },
    },
});

export const { selectAll: selectAllcodegen } = codegenAdapter.getSelectors(
    (state) => state.codegen
);

export const selectTrendingError = (state) => state.codegen.error;

export default codegenSlice.reducer;