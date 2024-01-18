import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	alertType: "success", //error,
	alertOpen: false, //true
	alertMessage: "",
};

export const alertSlice = createSlice({
	name: "alert",
	initialState,
	reducers: {
		displaySuccessAlert: (state, action) => {
			state.alertOpen = true;
			state.alertType = "success";
			state.alertMessage = action.payload;
		},
		hideAlertMessage: (state) => {
			state.alertOpen = false;
		},
		displayErrorAlert: (state, action) => {
			state.alertOpen = true;
			state.alertType = "error";
			state.alertMessage = action.payload;
		},
	},
});

export const { displaySuccessAlert, hideAlertMessage, displayErrorAlert } =
	alertSlice.actions;

export default alertSlice.reducer;
