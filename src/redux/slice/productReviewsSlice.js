import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	productReviews: [],
	avgRating: 0,
	noOfReviews: 0,
};

export const productReviewsSlice = createSlice({
	name: "productReviews",
	initialState,
	reducers: {
		reducerName: (state, action) => {},
	},
});

export const {} = productReviewsSlice.actions;

export default productReviewsSlice.reducer;
