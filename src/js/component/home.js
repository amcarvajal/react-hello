import React, { useState, useEffect } from "react";

//include images into your bundle
//create your first component

export function SecondsCounter() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCount(count => count + 1);
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="box bg-dark">
			<div className="m-box">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="30"
					height="30"
					fill="currentColor"
					className="bi bi-clock"
					viewBox="0 0 16 16">
					<path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
					<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
				</svg>
			</div>
			<div id="n0" className="m-box">
				0
			</div>
			<div id="n1" className="m-box">
				0
			</div>
			<div id="n2" className="m-box">
				{parseInt((count / 100) % 10)}
			</div>
			<div id="n3" className="m-box">
				{parseInt((count / 10) % 10)}
			</div>
			<div id="n4" className="m-box">
				{count % 10}
			</div>
		</div>
	);
}
