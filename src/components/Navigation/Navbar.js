import React, { useEffect, useState } from "react";
import { FiUser } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { GiCrownedSkull } from "react-icons/gi";
import "./Navbar.css";
import Modal from "../Modal/Modal";
import Signin from "../Authentication/Signin";
import { Link } from "react-router-dom";
export default function Navbar() {
	const [open, setOpen] = useState(false);
	const [isNavSticky, setIsNavSticky] = useState(false);
	useEffect(() => {
		let lastScrollPosition = 0;

		// Function to handle the scroll event
		function handleScroll2() {
			const currentScrollPosition = window.scrollY;
			if (currentScrollPosition < 300) {
				setIsNavSticky(false);
				return;
			}
			// Check if the current position is greater than the last position to determine scroll direction
			if (currentScrollPosition > lastScrollPosition) {
				// Scrolling down
				setIsNavSticky(false);
			} else {
				// Scrolling up
				setIsNavSticky(true);
			}
			// Update the last scroll position
			lastScrollPosition = currentScrollPosition;
		}

		// Attach the handleScroll function to the scroll event
		window.addEventListener("scroll", handleScroll2);
		return () => {
			window.removeEventListener("scroll", handleScroll2);
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
					<Link to={"/"}>
						<div className="brand flex items-center gap-4">
							<GiCrownedSkull />
							PREMIUM
						</div>{" "}
					</Link>
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
							<FiUser onClick={() => setOpen(true)} className="fill" />
						</li>
						<li>
							<FiShoppingCart className="fill" />
						</li>
					</ul>
				</div>{" "}
			</div>{" "}
			<Modal open={open} setOpen={setOpen}>
				<Signin />
			</Modal>
		</>
	);
}
