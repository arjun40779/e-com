import React, { useEffect } from "react";
import "./Homepage.css";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import NewArrival from "../components/NewArrivals/NewArrival";

export default function Homepage() {
	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "instant", // or 'instant' for no animation
		});
	});
	return (
		<div className="homepage">
			<HeroBanner />
			<NewArrival />
		</div>
	);
}
