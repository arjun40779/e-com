import React, { useEffect, useState } from "react";
import { FiUser } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { GiCrownedSkull } from "react-icons/gi";
import "./Navbar.css";
export default function Navbar() {
	const [isNavSticky, setIsNavSticky] = useState(false);
	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;

			setIsNavSticky(scrollY > 100);
		};

		// Add the event listener when the component mounts
		window.addEventListener("scroll", handleScroll);

		// Remove the event listener when the component unmounts
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	useEffect(() => {}, [isNavSticky]);
	return (
		<>
			{" "}
			<div className="nav-top">
				<p className="offer">
					Buy any 2 products and get extra 5% off. Discount code:
				</p>
			</div>
			<div className={` ${isNavSticky ? "sticky" : ""}`}>
				<div className={`navbar containerr`}>
					<ul className="nav-list">
						<li>New arrivals</li>
						<li>Men</li>
						<li>Women</li>
					</ul>
					<div className="brand flex items-center gap-4">
						<GiCrownedSkull />
						PREMIUM
					</div>
					<ul className="nav-icons">
						<li>
							<div className="search">
								<FiSearch />
								<input
									className="search-box"
									placeholder="Search"
									type="text"
									name="search"
								/>
							</div>
						</li>

						<li>
							<FiUser className="fill" />
						</li>
						<li>
							<FiShoppingCart className="fill" />
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}
