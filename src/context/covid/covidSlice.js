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
		isLoading: true, //tüm reducerlar fulfilled olduğunda isLoading false olsun istiyorum
		error: null,
		getAsyncApi: {
			isLoading: true,
		},
		getAsyncCountryList: {
			isLoading: true,
		},
	},
	reducers: {
		checkLoading: (state) => {
			(state.getAsyncApi.isLoading === false) &
			(state.getAsyncCountryList.isLoading === false)
				? (state.isLoading = false)
				: (state.isLoading = true);
			console.log(state.getAsyncApi.isLoading);
			console.log(state.getAsyncCountryList.isLoading);
			console.log(state.isLoading);
		},
	},
	extraReducers: {
		[getAsyncApi.pending]: (state) => {
			state.getAsyncApi.isLoading = true;
		},
		[getAsyncApi.fulfilled]: (state, action) => {
			state.getAsyncApi.isLoading = false;
			state.data = action.payload;
		},
		[getAsyncApi.rejected]: (state, action) => {
			state.getAsyncApi.isLoading = true;
			state.error = action.payload.error.message;
		},
		[getAsyncCountryList.pending]: (state) => {
			state.getAsyncCountryList.isLoading = true;
		},
		[getAsyncCountryList.fulfilled]: (state, action) => {
			state.getAsyncCountryList.isLoading = false;
			state.countryList = action.payload;
		},
		[getAsyncCountryList.rejected]: (state, action) => {
			state.getAsyncCountryList.isLoading = true;
			state.error = action.payload.error.message;
		},
	},
});
export const { checkLoading } = covidSlice.actions;

export default covidSlice.reducer;
