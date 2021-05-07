import React, { useState } from "react";
import "../../styles/index.scss";
//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	//const [ color, setColor] = useState("red");
	const [btnClass, setBtnClass] = useState("");
	const [btnClassYellow, setBtnClassYellow] = useState("");
	const [btnClassGreen, setBtnClassGreen] = useState("");
	// RED
	const handleClick = () => {
		setBtnClass("selected");
		setBtnClassYellow("");
		setBtnClassGreen("");
		console.log(btnClass);
	};
	//YELLOW
	const handleClickYellow = () => {
		setBtnClassYellow("selected");
		setBtnClassGreen("");
		setBtnClass("");
		console.log(btnClassYellow);
	};
	// GREEN
	const handleClickGreen = () => {
		setBtnClassGreen("selected");
		setBtnClassYellow("");
		setBtnClass("");
		console.log(btnClassGreen);
	};

	return (
		<div className="text-center mt-5">
			<div className="trafficTops"></div>
			<div className="container">
				<div
					className={`redLight ${btnClass}`}
					onClick={handleClick}></div>
				<div
					className={`yellowLight ${btnClassYellow}`}
					onClick={handleClickYellow}></div>
				<div
					className={`greenLight ${btnClassGreen}`}
					onClick={handleClickGreen}></div>
			</div>
		</div>
	);
}
