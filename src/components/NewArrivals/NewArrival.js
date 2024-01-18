import React from "react";
import { productData } from "../../assets/productData";
import "./NewArrival.css";
import Card from "../Product/Card";

export default function NewArrival() {
	return (
		<div className="new-arrival text-center p-16">
			<h1 className="heading font-thin pb-8 ">NEW ARRIVAL T-SHIRTS</h1>
			<div className=" grid grid-cols-4 gap-16">
				{productData.map((item) => (
					<Card key={item.id} data={item} />
				))}
			</div>
			<div className="w-full flex justify-center pt-8">
				<button className="py-4 px-16 text-xl text-white bg-black">
					VIEW ALL
				</button>
			</div>
		</div>
	);
}
