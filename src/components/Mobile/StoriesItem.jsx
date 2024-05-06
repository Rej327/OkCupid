import React from "react";
import { heart } from "../../assets";

const StoriesItem = ({ context, persons }) => {
	return (
		<div className="p-4 bg-white flex flex-col gap-4">
			<p className="leading-[1.6rem] text-[#1F1E1F] text-[1rem]">
				{context}
			</p>
			<div className="flex gap-2">
				<img src={heart} alt="heart icon" />
				<p className="font-bold text-[.875rem]">{persons}</p>
				<img src={heart} alt="heart icon" />
			</div>
		</div>
	);
};

export default StoriesItem;
