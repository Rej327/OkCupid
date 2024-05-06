import React from "react";
import Carousel from "./Carousel";

const Stories = () => {
	return (
		<div className="bg-[#F0F2F6] p-6">
			<h2 className="text-center text-[.875rem] leading-[1.4rem] font-bold text-[#1F1E1F] tracking-tight">
				SUCCESS STORIES{" "}
			</h2>

			<Carousel />
		</div>
	);
};

export default Stories;
