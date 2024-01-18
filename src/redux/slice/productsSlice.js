import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
	name: "products",
	initialState: {
		isLoading: false,
		isError: false,
		products: [],
		page: 1,
		isSingleProdLoading: true,
		singleProduct: {},
		gender: null,
		color: null,
		size: null,
		subCat: null,
		name: null,
	},
	reducers: {},
});

export const {} = productSlice.actions;

export default productSlice.reducer;
