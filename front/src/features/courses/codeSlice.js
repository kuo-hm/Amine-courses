/** @format */

import {
    createSlice,
    createAsyncThunk,
    createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "../../api/api";

export const codeAdapter = createEntityAdapter();

export const fetchCode = createAsyncThunk(
    "codeSlice/fetchCode",
    async(codee, { rejectWithValue }) => {
        const code = codee.codee;
        try {
            const response = await axios.post(
                `account/payed_check`, { code }, {
                    headers: {
                        "content-type": "application/json",
                        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
                    },
                }
            );

            if (response.status === 202) {
                sessionStorage.removeItem("error");
                window.location.reload(false);
            }
            return response.data;
        } catch (error) {
            if (!error.response) {
                throw error;
            }
            // window.location.reload(false);
            return "Check your code";
        }
    }
);

const codeSlice = createSlice({
    name: "code",
    initialState: codeAdapter.getInitialState({ error: null }),
    reducers: {},
    extraReducers: {
        [fetchCode.fulfilled]: (state, action) => {
            codeAdapter.addMany(state, action.payload);
        },

        [fetchCode.rejected]: (state, action) => {
            if (action.payload) {
                state.error = action.payload.status_message;
            } else {
                state.error = action.error;
            }
        },
    },
});

export const { selectAll: selectAllCode } = codeAdapter.getSelectors(
    (state) => state.code
);

export const selectTrendingError = (state) => state.trending.error;

export default codeSlice.reducer;