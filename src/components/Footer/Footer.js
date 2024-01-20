import React from "react";
import { GiCrownedSkull } from "react-icons/gi";
import "./Footer.css";
export default function Footer() {
	return (
		<div className="wrapper footer">
			<div className=" container">
				<div className="footer-top">
					<ul className="footer-item">
						<h3 className="sub-heading">MAY WE HELP YOU?</h3>
						<li>Contact Us</li>
						<li>My Order</li>
						<li>FAQs</li>
					</ul>
					<ul className="footer-item">
						<h3 className="sub-heading">THE COMPANY</h3>
						<li>About Us</li>
						<li>Careers</li>
						<li>Privacy & Cookie Policy</li>
					</ul>
					<ul className="footer-item">
						<h3 className="sub-heading">STORE LOCATION</h3>
						<li>A-101, ABC, XYZ PQR, MNO,ABC</li>
					</ul>
				</div>
				<div className="flex w-full justify-center text-xs border-t border-grey p-4">
					<div className="brand flex items-center gap-4 text-white text-xs">
						<GiCrownedSkull className="text-white" />
						PREMIUM
					</div>
				</div>
			</div>
		</div>
	);
}
