import React from "react";
import Homepage from "../pages/Homepage";
import Signin from "../components/Authentication/Signin";
import { Routes, Route } from "react-router-dom";

export default function Main() {
	return (
		<div className="wrapper">
			<div className="main containerr">
				<Routes>
					<Route exact path="/" element={<Homepage />} />
					<Route path="/signin" element={<Signin />} />
				</Routes>
			</div>
		</div>
	);
}
