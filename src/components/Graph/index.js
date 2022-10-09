import React from "react";
import {
	Bar,
	BarChart,
	CartesianGrid,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";

function Graph({ data }) {
	console.log(data);
	const { confirmed, deaths, recovered } = data;

	const graphData = [
		{
			name: "confirmed",
			value: confirmed.value,
		},
		{
			name: "deaths",
			value: deaths.value,
		},
		{
			name: "recovered",
			value: recovered.value,
		},
		{
			name: "active",
			value: Number(confirmed.value) - Number(deaths.value),
		},
	];

	return (
		<div className=" w-7/12 h-[400px] text-black">
			<ResponsiveContainer width={"100%"} height={"100%"}>
				<BarChart
					width={830}
					height={250}
					data={graphData}
					margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 5,
					}}
				>
					<CartesianGrid strokeDasharray="8 8" />
					<XAxis dataKey="name" />
					<YAxis scale={"auto"} orientation="right" stroke="#82ca9d" />
					<Tooltip />
					{/* <Legend /> */}
					<Bar dataKey="value" fill="#8884d8" background={{ fill: "#eee" }} />
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
}

export default Graph;
