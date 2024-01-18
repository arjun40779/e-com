import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { displaySuccessAlert } from "./alertSlice";
import axios from "axios";
import { removeItemFromCart, resetCart } from "./cartSlice";

const initialState = {
	orderItems: [],
	noOfItemsOrdered: 0,
	loading: false,
	error: false,
};
export const orderSlice = createSlice({
	name: "order",
	initialState,
	reducers: {
		resetOrder: (state) => {
			state.orderItems = [];
			state.noOfItemsOrdered = 0;
			state.loading = false;
			state.error = false;
		},
	},
});

export const { resetOrder } = orderSlice.actions;

export default orderSlice.reducer;
