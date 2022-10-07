import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Card from "./Card";

function Stats() {
	const data = useSelector((state) => state.covid.data);
	const { lastUpdate, confirmed, deaths, recovered } = data;

	return (
		<div className="flex flex-row mx-auto py-8 justify-center items-center gap-2 w-11/12">
			<Card
				title="Infected"
				subtitle="Number of infect cases of"
				// value={confirmedValue}
				date={lastUpdate}
				color={"blue"}
				className={"flex-1"}
			/>
			<Card
				title="Recovered"
				subtitle={"Number of recoveries from"}
				// value={recoveredValue}
				date={lastUpdate}
				color={"green"}
				className={"flex-1"}
			/>
			<Card
				title="Deaths"
				subtitle={"Number of deaths caused"}
				// value={deathsValue}
				date={lastUpdate}
				color={"red"}
				className={"flex-1"}
			/>
			<Card
				title="Active"
				subtitle={"Number of active cases of"}
				// value={confirmedValue - deathsValue}
				date={lastUpdate}
				color={"orange"}
				className={"flex-1"}
			/>
		</div>
	);
}

export default Stats;
