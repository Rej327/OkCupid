import React from "react";
import Navigation from "../components/Desktop/Navigation";
import Hero from "../components/Desktop/Hero";
import Footer from "../components/Desktop/Footer";
import HeroBackground from "../components/HeroBackground";

const Main = () => {
	return (
		<div className="max-lg:hidden">
			<HeroBackground>
				<Navigation />
				<Hero />
			</HeroBackground>
			<Footer />
		</div>
	);
};

export default Main;
