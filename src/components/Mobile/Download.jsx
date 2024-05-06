import React from "react";
import { android, ios } from "../../assets";

const Download = () => {
	return (
		<div className="pt-2 pb-8 px-6">
			<h2 className="mb-[10px] text-[.875rem] font-bold text-center">
				Download the OKCupid App
			</h2>
			<div className="flex gap-2 w-fit mx-auto">
				<img className="h-[43px]" src={ios} alt="IOS store" />
				<img className="h-[43px]" src={android} alt="Play store" />
			</div>
		</div>
	);
};

export default Download;
