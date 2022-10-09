import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "./components/Form";
import Header from "./components/Header";
import Stats from "./components/Stats";
import Graph from "./components/Graph";
import Footer from "./components/Footer";
import {
	checkLoading,
	getAsyncApi,
	getAsyncCountryList,
} from "./context/covid/covidSlice";

function App() {
	const dispatch = useDispatch();
	const countryList = useSelector((state) => state.covid.countryList);
	const data = useSelector((state) => state.covid.data);
	const isLoading = useSelector((state) => state.covid.isLoading);
	useEffect(() => {
		dispatch(getAsyncApi());
		dispatch(getAsyncCountryList());
		setTimeout(() => dispatch(checkLoading()), 200); //

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isLoading]);

	return (
		<div className="container p-5 flex flex-col items-center justify-center">
			<Header />
			{!isLoading ? (
				<>
					<Stats data={data} />
					<Form countryList={countryList} />

					<Graph data={data} />
				</>
			) : (
				"Loading"
			)}
			<Footer />
		</div>
	);
}

export default App;
