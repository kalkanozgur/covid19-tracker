import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchApi } from "../api";

export const getAsyncApi = createAsyncThunk(
	"covid/getAsyncApi",
	async (country) => {
		return await fetchApi(country);
	}
);

const covidSlice = createSlice({
	name: "covid",
	initialState: {
		data: [],
		isLoading: true,
		error: null,
	},
	extraReducers: {
		[getAsyncApi.pending]: (state) => {
			state.isLoading = true;
		},
		[getAsyncApi.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.data = action.payload;
		},
		[getAsyncApi.rejected]: (state, action) => {
			state.isLoading = true;
			state.error = action.payload.error.message;
		},
	},
});

export default covidSlice.reducer;
