import React from "react";
import Homepage from "../pages/Homepage";
import Signin from "../components/Authentication/Signin";
import { Routes, Route } from "react-router-dom";
import SingleProductPage from "../pages/SingleProductPage";

export default function Main() {
	return (
		<div className="wrapper min-h-screen">
			<div className="main containerr">
				<Routes>
					<Route exact path="/" element={<Homepage />} />
					<Route path="/signin" element={<Signin />} />
					<Route path="/product/:id" element={<SingleProductPage />} />
				</Routes>
			</div>
		</div>
	);
}
