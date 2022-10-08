import React from "react";

function Header() {
	return (
		<div className="flex flex-col items-center">
			<img src={require("./../../assets/header.png")} alt="" />
			<h1>Global and Country Wise Cases of Corona Virus</h1>
			<h2>(For a Particular country, select a Country from below)</h2>
		</div>
	);
}

export default Header;
