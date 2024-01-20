import React from "react";
import "./Review.css";
export default function Reviews() {
	return (
		<div className="review-container">
			<div className="product-review-top ">
				<p className="bg-gray-100 p-8 text-center text-4xl">Product Reviews</p>
				<div className="rating-display-container">
					<div className="rating-display w-full flex gap-2 justify-center">
						<div className="bg-gray-100 text-center p-16">
							<p>Based on 11 review(s)</p>
							<p className="text-6xl">4.6/ 5</p>
							<p>stars</p>
						</div>
						<div className="bg-gray-100 p-16">
							<p>5</p>
							<p>4</p>
							<p>3</p>
							<p>2</p>
							<p>1</p>
						</div>
					</div>
					<button>Write a review</button>
				</div>
			</div>
		</div>
	);
}
