import React from "react";
import { ice_cream, logo, mobilelogo } from "../../assets";
import { FaGreaterThan } from "react-icons/fa";

const MobileHero = () => {
	return (
		<>
			<div
				className="flex flex-col justify-between items-center h-screen bg-center"
				style={{
					backgroundColor: "#97ABFE",
					backgroundImage: `url(${ice_cream})`,
					backgroundRepeat: "no-repeat",
					backgroundSize: "contain",
					backgroundPositionY: "100%",
				}}
			>
				<div>
					<img
						src={mobilelogo}
						className="mx-auto my-10"
						alt="Logo"
					/>
					<h1 className="mobileTitle">
						DATING FOR EVERY SINGLE PERSON
					</h1>
				</div>
				<div className="px-[24px] mobileGradientBg">
					<p className="text-white text-[.75rem] text-center leading-[1.3rem]">
						By clicking Join, you agree to our{" "}
						<a className="underline font-bold text-white" href="#">
							Terms
						</a>
						. Learn how we process your data in our{" "}
						<a className="underline font-bold text-white" href="#">
							Privacy Policy
						</a>{" "}
						and{" "}
						<a className="underline font-bold text-white" href="#">
							Cookies Policy
						</a>
						.
					</p>
					<button className="text center w-full bg-white py-[1rem] rounded-full font-bold tracking-wider text-[.80rem] my-[1.5rem]">
						JOIN OKCUPID
					</button>
					<div className="flex gap-2 items-center justify-center mb-[1.5rem]">
						<p className="text-white tracking-wider text-center font-bold text-[.80rem] ">
							SIGN IN
						</p>
						<FaGreaterThan className="w-[.5rem] text-white " />
					</div>
					<p className="text-white text-center underline text-[.70rem] mb-[.8rem] font-bold">
						from Match Group
					</p>
				</div>
			</div>
		</>
	);
};

export default MobileHero;
