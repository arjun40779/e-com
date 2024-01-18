import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { displaySuccessAlert, displayErrorAlert } from "./alertSlice";

const initialState = {
	isWishlistLoading: false,
	error: false,
	wishlistItems: [],
	wishlistItemsId: [],
	noOfItemsInWishlist: 0,
};

const WISHLIST_URL =
	"https://academics.newtonschool.co/api/v1/ecommerce/wishlist";

export const getWishListItems = createAsyncThunk(
	"getWishListItems",
	async (_, { getState }) => {
		const token = getState().user.userToken;
		const OPTIONS = {
			method: "GET",
			headers: {
				Authorization: "Bearer " + token,
				projectID: "aihcnvtyjvs7",
			},
		};
		const res = await fetch(WISHLIST_URL, OPTIONS);
		const data = await res.json();
		return data.data.items;
	}
);

export const addToWishlist = createAsyncThunk(
	"addToWishlist",
	async (prod_id, { getState, dispatch }) => {
		const token = getState().user.userToken;
		const OPTIONS = {
			method: "PATCH",
			headers: {
				Authorization: "Bearer " + token,
				"Content-Type": "application/json",
				projectID: "aihcnvtyjvs7",
			},
			body: JSON.stringify({
				productId: prod_id,
			}),
		};
		const response = await fetch(WISHLIST_URL, OPTIONS);
		const data = await response.json();
		console.log(data);
		if (data.status !== "success") {
			dispatch(displayErrorAlert(data.message));
			throw Error;
		} else {
			dispatch(displaySuccessAlert(data.message));
			dispatch(getWishListItems());
		}
	}
);

export const removeFromWishlist = createAsyncThunk(
	"removeFromWishlist",
	async (prod_id, { dispatch, getState }) => {
		const token = getState().user.userToken;
		const OPTIONS = {
			method: "DELETE",
			headers: {
				Authorization: "Bearer " + token,
				"Content-Type": "application/json",
				projectID: "aihcnvtyjvs7",
			},
		};
		const response = await fetch(`${WISHLIST_URL}/${prod_id}`, OPTIONS);
		const data = await response.json();
		if (data.status !== "success") {
			dispatch(displayErrorAlert(data.message));
			throw Error;
		} else {
			dispatch(displaySuccessAlert(data.message));
			dispatch(getWishListItems());
		}
	}
);

export const wishlistSlice = createSlice({
	name: "wishlist",
	initialState,
	reducers: {
		updateWishlist: (state, action) => {
			state.isWishlistLoading = false;
			state.wishlistItems = action.payload;
		},
		resetWishlist: (state) => {
			state.isWishlistLoading = false;
			state.error = false;
			state.wishlistItems = [];
			state.wishlistItemsId = [];
			state.noOfItemsInWishlist = 0;
		},
	},

	extraReducers: (builder) => {
		builder.addCase(addToWishlist.pending, (state) => {
			state.isWishlistLoading = true;
		});
		builder.addCase(addToWishlist.fulfilled, (state, action) => {
			state.isWishlistLoading = false;
			state.error = false;
		});
		builder.addCase(addToWishlist.rejected, (state) => {
			state.isWishlistLoading = false;
			state.error = true;
		});
		builder.addCase(getWishListItems.pending, (state) => {
			state.isWishlistLoading = true;
		});
		builder.addCase(getWishListItems.fulfilled, (state, action) => {
			state.isWishlistLoading = false;
			state.wishlistItems = action.payload;
			state.noOfItemsInWishlist = state.wishlistItems.length;
			state.wishlistItemsId = state.wishlistItems.map(
				(item) => item.products._id
			);
		});
		builder.addCase(getWishListItems.rejected, (state) => {
			state.isWishlistLoading = false;
			state.error = true;
		});
	},
});
export const { updateWishlist, resetWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
