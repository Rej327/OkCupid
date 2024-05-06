import React from "react";

const FooterItem = ({ list, title }) => {
	return (
		<div>
			<h2 className="text-white tracking-wider font-bold">{title}</h2>
			<div className="mt-[5px]">
				<ul>
					{list.map((link) => (
						<li>
							<a
								className="text-white text-[14px] leading-[26px] hover:text-[#8C8C8C]"
								href="#"
							>
								{link}
							</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default FooterItem;
