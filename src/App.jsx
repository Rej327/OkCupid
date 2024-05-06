import React, { useState, useEffect } from "react";
import "./App.css";
import Main from "./view/Main";
import Mobile from "./view/Mobile";
import { okcupid } from "./assets";

function App() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setLoading(false);
		}, 2000);

		return () => clearTimeout(timeout);
	}, []);

	return (
		<div className="App">
			{loading ? (
				<div className="loader">
					<img src={okcupid} alt="loading" />
				</div>
			) : (
				<>
					<Main />
					<Mobile />
				</>
			)}
		</div>
	);
}

export default App;
