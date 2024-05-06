import React from "react";
import MobileHero from "../components/Mobile/MobileHero";
import Stories from "../components/Mobile/Stories";
import About from "../components/Mobile/About";
import Download from "../components/Mobile/Download";
import Footer from "../components/Mobile/Footer";

const Mobile = () => {
	return (
		<div className="block lg:hidden">
			<MobileHero />
			<Stories />
			<About />
			<Download />
			<Footer />
		</div>
	);
};

export default Mobile;
