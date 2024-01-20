import "./SingleProductPage.css";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import { singleProduct } from "../assets/productData";
import { useEffect } from "react";
const SingleProductPage = () => {
	const { title, price, rating, story, size, imgages } = singleProduct;
	const stars = Array.from({ length: rating }, (_, index) => (
		<FaStar key={index} className="star-icon fill-yellow-400" />
	));
	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "instant", // or 'instant' for no animation
		});
	});
	return (
		<div className="px-16 w-full flex">
			<div className="product-img-container w-full ">
				{imgages.map((img) => (
					<img alt="product-img" src={img} />
				))}
			</div>
			<div className="product-info-container  h-full w-full">
				<div className="product-info m-auto w-2/3  ">
					<p className="product-title">{title}</p>
					<p className="product-price">
						<span>{price}</span>
					</p>
					<p className="product-ratin flex items-center gap-16">
						<span className="flex gap-2">
							{stars}{" "}
							{rating % 1 !== 0 ? (
								<FaStarHalf className="fill-yellow-400" />
							) : null}
						</span>
						<span>11 reviews</span>
					</p>
					<p className="product-size">
						Size:
						<select className="w-full p-2 size-list">
							{size.map((s) => (
								<option>{s}</option>
							))}
						</select>
					</p>
					<button className="w-full bg-black text-white mb-4 cart-btn">
						{" "}
						ADD TO CART
					</button>
					<p>Story</p>
					<p className="product-story">{story}</p>
				</div>
			</div>
		</div>
	);
};

export default SingleProductPage;
