import React from "react";
import classnames from "classnames";

function Card({ title, subtitle, value, date, color }) {
	return (
		<div
			className={classnames(
				"w-[40vw] mx-4 border-b-[3vh] p-[3vh] h-[36vh] relative rounded-xl ",
				{
					"bg-red-800 border-red-900": color === "red",
					"bg-blue-800 border-blue-900": color === "blue",
					"bg-green-800 border-green-900": color === "green",
					"bg-orange-800 border-orange-900": color === "orange",
				}
			)}
		>
			<h1 className="py-2">{title}</h1>
			<h1 className="text-3xl">{value}</h1>
			<h2>Last updated at :</h2>
			<p>{date}</p>
			<div>{subtitle}</div>
			<p>COVID-19</p>
		</div>
	);
}

export default Card;
