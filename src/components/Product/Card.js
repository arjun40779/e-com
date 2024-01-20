import React from "react";
import { FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";
export default function Card({ data }) {
	const { src, price, title } = data;
	return (
		<Link to={"/product/id"}>
			<div className="card m-auto">
				<img className="w-full" src={src} alt={title} />
				<p className="line-clamp-1 mt-4 px-1">{title}</p>
				<div className="flex px-4 justify-between">
					<p className="text-red-500">{price}</p>
					<FiHeart className="cursor-pointer" size={15} />
				</div>
			</div>{" "}
		</Link>
	);
}
