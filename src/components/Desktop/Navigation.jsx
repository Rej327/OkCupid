import React, { useState } from "react";
import { logo } from "../../assets";
import Modal from "./Modal";
import useModalState from "../../hooks/useModalState";
import SignIn from "../auth/SignIn";

const Navigation = () => {
	const { isOpened, open, close } = useModalState();

	return (
		<div className="w-[1180px] h-[97px] py-[30px] px-[65px] mx-auto flex items-center">
			<img className="h-[30px] w-[90px]" src={logo} alt="Logo" />
			<div className="flex gap-4 items-center ml-auto">
				<p className="text-[14px] tracking-wide text-[#2A2F35] font-light font-gt">
					Have an account?
				</p>
				<button
					onClick={open}
					className="h-[36px] w-[70.9px] border-[1px] pt-1 border-[#2A2F35] rounded-[3px] text-[13px] font-semibold font-gt hover:opacity-80 duration-75"
				>
					Sign in
				</button>
			</div>

			<Modal opened={isOpened} onClose={close}>
				<SignIn />
			</Modal>
		</div>
	);
};

export default Navigation;
