import React from "react";
import "./HeroBanner.css";

import Carousel from "react-bootstrap/Carousel";

function HeroBanner() {
	return (
		<div className="hero-banner">
			<Carousel fade>
				<Carousel.Item>
					<img
						src="https://frenchcrown.in/cdn/shop/files/Slider_1_6667f66a-f6ac-4dc2-8731-76433afc5155.jpg?v=1702728519&width=2000"
						alt="img1"
					/>
					<Carousel.Caption>
						<h3>First slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						src="https://frenchcrown.in/cdn/shop/files/Slider_copy_192425c8-90d3-48fc-aea0-c905c3841c21.jpg?v=1695475329&width=2000"
						alt="img1"
					/>
					<Carousel.Caption>
						<h3>Second slide label</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						src="https://frenchcrown.in/cdn/shop/files/12345678.jpg?v=1703852895&width=1800"
						alt="img1"
					/>
					<Carousel.Caption>
						<h3>Third slide label</h3>
						<p>
							Praesent commodo cursus magna, vel scelerisque nisl consectetur.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}

export default HeroBanner;
