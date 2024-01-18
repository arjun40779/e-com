import React from "react";
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
			</div>
		</div>
	);
}
