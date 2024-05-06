import React from "react";
import { matchGroup } from "../../assets";
import { FaGreaterThan } from "react-icons/fa";
import FooterItem from "./FooterItem";

const Footer = () => {
	return (
		<div className="bg-[#1A1A1A] py-[3.5rem] w-full">
			<div className="w-[1200px] mx-auto flex justify-between">
				<div className="flex flex-col gap-4 items-center">
					<a
						className=" px-[4rem] cursor-pointer rounded-[2px] text-[14px] leading-[48px] font-semibold text-white bg-[#3344FF] hover:bg-[#4D5BFF] "
						href="#"
					>
						JOIN OKCUPID
					</a>
					<p className="text-[#C0C0C0] text-[14px]">© OkCupid 2024</p>
					<div className="flex flex-col items-center">
						<p className="text-[#E6E6E6] text-[14px]">from</p>
						<img
							className="w-[120px] h-[19px]"
							src={matchGroup}
							alt="From Match Group Img"
						/>
					</div>
				</div>

				<div>
					<h2 className="text-white tracking-wider font-bold">
						Language
					</h2>
					<button className="mt-[5px] p-[8px] text-[14px] leading-[22px] text-white border-[1px] border-[#F1F1F1] rounded-[2px] flex items-center justify-between w-[120px]">
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
					list={[
						"Blog",
						"Tech Blog",
						"Facebook",
						"Instagram",
						"Twitter",
					]}
					title="FOLLOW"
				/>
				<FooterItem list={["Download Apps"]} title="SPECIAL" />
			</div>
		</div>
	);
};

export default Footer;
