import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const About = () => {
	const [expanded, setExpanded] = useState(false);

	const toggleExpanded = () => {
		setExpanded(!expanded);
	};

	return (
		<div className="bg-[#F0F2F6] mb-[24px] p-[18px] text-[#666] text-[.875rem] flex flex-col gap-4 leading-[1.7rem]">
			<p>
				Get the best online dating app for singles to find a match based
				on who you really are and what you love. No matter who you are
				or what you are looking for, you are welcome at OkCupid.
			</p>
			{!expanded && (
				<div
					className="flex gap-1 items-center"
					onClick={toggleExpanded}
				>
					<p className="text-[#0100BE] cursor-pointer font-bold tracking-wider">
						READ MORE
					</p>
					<MdOutlineKeyboardArrowDown className="text-[#0100BE] text-2xl font-extrabold" />
				</div>
			)}
			{expanded && (
				<>
					<p>
						Great dates come from great connections - that’s why
						OkCupid shows off who you are beyond a photo. Meet new
						people and find love based on what makes you, well, you
						- because you deserve it. Our free dating app helps you
						meet singles, connect, chat or have a deep conversation
						through our one-of-a-kind messaging system.
					</p>

					<p>
						Love doesn’t discriminate, and neither does OkCupid. You
						love your own way - if you’re straight, LGBTQ, gay,
						lesbian, nonbinary, or don’t fit into any one label,
						OkCupid can help you find love too. You can even set
						your pronouns at registration. Flirt, find love, build
						connections and go on great dates with OkCupid!
					</p>
				</>
			)}
		</div>
	);
};

export default About;
