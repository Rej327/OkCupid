import React, { useState } from "react";
import { BiPlus, BiMinus } from "react-icons/bi";
import { FaGreaterThan } from "react-icons/fa";

const FooterItem = ({ list, title }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleAccordion = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div>
			<div
				className="w-full flex justify-between items-center py-4 px-2 border-t-[#3b3b3b] border-t-[1px] cursor-pointer"
				onClick={toggleAccordion}
			>
				<h2 className="text-white tracking-wider font-bold">{title}</h2>
				<button className="text-white text-2xl">
					{isOpen ? <BiMinus /> : <BiPlus />}
				</button>
			</div>

			{isOpen && (
				<div className="px-2 py-2 text-white text-[1.125rem]">
					<ul className="flex flex-col gap-5">
						{list.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};

const Footer = () => {
	return (
		<div className="bg-[#1B1B1A]">
			<div className="w-full flex justify-between items-center p-2">
				<h2 className="text-white tracking-wider font-bold">
					LANGUAGE
				</h2>
				<button className="mt-[5px] p-[8px] text-[14px] leading-[22px] text-white border-[1px] border-[#F1F1F1] rounded-[2px] flex items-center justify-between w-[180px]">
					English <FaGreaterThan className="w-[.5rem]" />
				</button>
			</div>
			<FooterItem
				list={["About", "Careers", "Press", "Ad Choices"]}
				title="COMPANY"
			/>
			<FooterItem
				list={[
					"Privacy",
					"Cookies – Manage preferences",
					"Terms",
					"Community Guidelines",
					"Consumer Health Data Privacy Policy",
				]}
				title="CONDITIONS"
			/>
			<FooterItem
				list={["Support", "Security", "Safety Tips", "Impressum"]}
				title="CONTACT"
			/>
			<FooterItem
				list={["Blog", "Tech Blog", "Facebook", "Instagram", "Twitter"]}
				title="FOLLOW"
			/>
			<FooterItem
				list={["Switch to Desktop site", "Download Apps"]}
				title="SPECIAL"
			/>
			<div className="flex w-full justify-between items-center p-[15px]">
				<p className="text-gray-400 text-[.875rem] ">© OkCupid 2024</p>
				<p className="text-white underline">from Match Group</p>
			</div>
		</div>
	);
};

export default Footer;
