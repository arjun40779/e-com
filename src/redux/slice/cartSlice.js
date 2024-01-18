import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { displaySuccessAlert } from "./alertSlice";

const initialState = {
	totalPrice: 0,
	loading: false,
	error: false,
	cartItems: [],
	noOfItemsInCart: 0,
	cartItemsId: [],
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {},
});

export const {} = cartSlice.actions;

export default cartSlice.reducer;
