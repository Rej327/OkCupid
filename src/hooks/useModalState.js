import React, { useState } from "react";

const useModalState = () => {
	const [isOpened, setIsOpened] = useState(false);

	const open = () => {
		setIsOpened(true);
	};

	const close = () => {
		setIsOpened(false);
	};

	return { isOpened, open, close };
};

export default useModalState;
