import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import ProductReducer from "./slice/productsSlice";
import wishlistReducer from "./slice/wishlistSlice";
import userReducer from "./slice/userSlice";
import cartReducer from "./slice/cartSlice";
import alertReducer from "./slice/alertSlice";
import orderReducer from "./slice/orderSlice";
export default configureStore({
	reducer: {
		products: ProductReducer,
		wishlist: wishlistReducer,
		user: userReducer,
		cart: cartReducer,
		alert: alertReducer,
		order: orderReducer,
	},
	middleware: [thunk],
});
