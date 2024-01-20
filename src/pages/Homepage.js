import React, { useEffect } from "react";
import "./Homepage.css";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import NewArrival from "../components/NewArrivals/NewArrival";

export default function Homepage() {
	useEffect(() => {
		window.scrollTo(0, 0);
	});
	return (
		<div className="homepage">
			<HeroBanner />
			<NewArrival />
		</div>
	);
}
