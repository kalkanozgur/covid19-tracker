import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchApi, fetchCountryList } from "../api";

export const getAsyncApi = createAsyncThunk(
	"covid/getAsyncApi",
	async (country) => {
		return await fetchApi(country);
	}
);

export const getAsyncCountryList = createAsyncThunk(
	"covid/getAsyncCountryList",
	async () => await fetchCountryList()
);

const covidSlice = createSlice({
	name: "covid",
	initialState: {
		data: [],
		countryList: [],
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
		[getAsyncCountryList.pending]: (state, action) => {
			state.isLoading = true;
		},
		[getAsyncCountryList.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.countryList = action.payload;
		},
		[getAsyncCountryList.rejected]: (state, action) => {
			state.isLoading = true;
			state.error = action.payload.error.message;
		},
	},
});

export default covidSlice.reducer;
