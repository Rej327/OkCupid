import React, { useState, useEffect } from "react";
import { door, eating_couple, proposing, two_women } from "../assets";

const HeroBackground = ({ children }) => {
	const [index, setIndex] = useState(0);

	const colors = ["#F9DAFE", "#FBC5EB", "#C1DFFA", "#C0CCFB"];
	const images = [door, eating_couple, proposing, two_women];

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prevIndex) => (prevIndex + 1) % colors.length);
		}, 5000);

		return () => clearInterval(interval);
	}, [colors.length]);

	return (
		<div
			className="hero-background"
			style={{
				"--color": colors[index],
				"--image": `url(${images[index]})`,
			}}
		>
			{children}
		</div>
	);
};

export default HeroBackground;
