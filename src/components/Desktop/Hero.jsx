import React from "react";
import { android, ios } from "../../assets";

const Hero = () => {
	return (
		<div className="w-[1180px] mx-auto px-[65px] pb-[75px]">
			<h1 className="text-[58px] w-[682.5px] font-black tracking-[2px] leading-[64px] header-shadow text-white ml-[8px] mb-[16px]">
				DATING FOR EVERY SINGLE PERSON
			</h1>
			<div className="mt-[25px] text-[20px] w-[460px] tracking-wide">
				<p>
					OkCupid is the only dating app that matches you on what
					matters to you.
				</p>
				<p>You deserve to find who you’re looking for.</p>
				<p>Meet them today!</p>
			</div>
			<p className="mt-[25px] w-[290px] text-[18px] leading-[22px]">
				By clicking Join, you agree to our{" "}
				<a className="underline font-semibold text-[#1E1E1E]" href="#">
					Terms
				</a>
				. Learn how we process your data in our{" "}
				<a className="underline font-semibold text-[#1E1E1E]" href="#">
					Privacy Policy
				</a>{" "}
				and{" "}
				<a className="underline font-semibold text-[#1E1E1E]" href="#">
					Cookies Policy
				</a>
				.
			</p>
			<button className="w-[284px] mt-[20px] text-center bg-black text-white text-[16px] font-bold leading-[62px] cursor-pointer tracking-wide rounded-[3px]">
				JOIN OKCUPID
			</button>
			<div className="mt-[15px]">
				<p className="text-[#2A2F35] font-semibold tracking-wider leading-[43px]">
					GET THE APP
				</p>
				<div className="flex gap-2">
					<img
						className="h-[43px] w-[128.625px]"
						src={ios}
						alt="Ios Button"
					/>
					<img
						className="h-[43px] w-[143.328px]"
						src={android}
						alt="Android Button"
					/>
				</div>
			</div>
		</div>
	);
};

export default Hero;
