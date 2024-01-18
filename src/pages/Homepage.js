import React from "react";
import "./Homepage.css";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import NewArrival from "../components/NewArrivals/NewArrival";
export default function Homepage() {
	return (
		<div className="homepage">
			<HeroBanner />
			<NewArrival />
		</div>
	);
}
