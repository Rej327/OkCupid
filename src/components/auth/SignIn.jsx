import React from "react";

const SignIn = () => {
	return (
		// <div className="absolute h-screen w-[100vw] flex items-center justify-center">
		<div className="w-auto p-6 flex flex-col items-center justify-center gap-4">
			<h2 className="text-center text-[24px] leading-[22px] text-[#2A2F35] font-semibold">
				Enter Email and password
			</h2>
			<form className="flex flex-col gap-4" action="">
				<div className="flex flex-col">
					<label
						className="text-[17px] text-[#030320] leading-[30px]"
						htmlFor="email"
					>
						Email:
					</label>
					<input
						className="text-[17px] leading-[20px] h-[46px] border-2 border-[#AEB4BF] py-[10px] px-[15px] min-w-[65px] shadow-md rounded-[4px] w-[300px] focus:outline-[#0000BF]"
						type="email"
						name="email"
						placeholder="Email"
					/>
				</div>
				<div className="flex flex-col">
					<label
						className="text-[17px] text-[#030320] leading-[30px]"
						htmlFor="password"
					>
						Password:
					</label>
					<input
						className="text-[17px] leading-[20px] h-[46px] border-2 border-[#AEB4BF] py-[10px] px-[15px] min-w-[65px] shadow-md rounded-[4px] w-[300px] focus:outline-[#0000BF]"
						type="password"
						name="password"
						placeholder="Password"
					/>
				</div>
				<button
					className="text-[16px] my-3 font-bold tracking-[1px] leading-[18px] text-center bg-[#949AA6] text-white h-[58px] w-[300px] rounded-[3px]"
					type="submit"
					name="submit"
					id="submit"
				>
					NEXT
				</button>
			</form>
			<p className="text-[16px] text-[#0000BF] font-bold tracking-wider cursor-pointer">
				FORGOT PASSWORD?
			</p>
			<div className="flex items-center gap-2">
				<div className="w-[130px] h-[1px] border-b-[1px] border-[#2A2F35]"></div>
				<p>or</p>
				<div className="w-[130px] h-[1px] border-b-[1px] border-[#2A2F35]"></div>
			</div>
			<button className="text-[16px] font-semibold rounded-[3px] w-[294px] h-[58px] text-white text-center cursor-pointer bg-[#0000BF] hover:bg-[#5C69FF]">LOG IN WITH PHONE</button>
		</div>
		// </div>
	);
};

export default SignIn;
