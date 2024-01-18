import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { resetWishlist, getWishListItems } from "./wishlistSlice";
import { getCartItems, resetCart } from "./cartSlice";
import { displaySuccessAlert, displayErrorAlert } from "./alertSlice";

const initailUserState = {
	loginModalVisible: false,
	registerModalVisible: false,
	loading: false,
	error: null,
	isAuthenticated: false,
	userData: {
		name: "",
		phone: "",
		skills: ["", "", ""],
	},
	userAddress: [],
	activeAddress: 0,
	userToken: "",
};

export const userSlice = createSlice({
	name: "user",
	initialState: /* userState ? userState :  */ initailUserState,
	reducers: {
		// Reducer to set user data in the store
	},
});

export const {
	setAddress,
	setUserData,
	setUserLoggedOut,
	setLoginModalVisible,
	uploadUserDataAfterReg,
	setActiveAddress,
} = userSlice.actions;

export default userSlice.reducer;
