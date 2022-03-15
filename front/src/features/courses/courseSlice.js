import {
    createSlice,
    createAsyncThunk,
    createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "../../api/api";

export const coursesAdapter = createEntityAdapter();

export const fetchCourses = createAsyncThunk(

    "coursesSlice/fetchCourses",
    async (_, { rejectWithValue }) => {

        try {

            const response = await axios.get(`courses`, {
                headers: {
                    "content-type": "text/json",
                    Authorization: `Bearer ${localStorage.getItem("authToken")}`,
                },
            });

            return response.data;
        } catch (error) {
            localStorage.clear();
            if (!error.response) {
                localStorage.clear();
                throw error;
            }
window.location.href = "/login";

            return rejectWithValue(error.response.data);
        }
    }
);

const trendingSlice = createSlice({
    name: "courses",
    initialState: coursesAdapter.getInitialState({ error: null }),
    reducers: {},
    extraReducers: {
        [fetchCourses.fulfilled]: (state, action) => {
            coursesAdapter.addMany(state, action.payload);
        },

        [fetchCourses.rejected]: (state, action) => {
            if (action.payload) {
                state.error = action.payload.status_message;
            } else {
                state.error = action.error;
            }
        },
    },
});

export const { selectAll: selectAllCourses } = coursesAdapter.getSelectors(
    (state) => state.courses
);

export const selectTrendingError = (state) => state.trending.error;

export default trendingSlice.reducer;