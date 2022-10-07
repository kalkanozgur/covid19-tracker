import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Form from "./components/Form";
import Header from "./components/Header";
import Stats from "./components/Stats";
import Graph from "./components/Graph";
import Footer from "./components/Footer";
import { getAsyncApi } from "./context/covid/covidSlice";

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAsyncApi());

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="container p-5">
			<Header />
			<Stats />
			<Form />
			<Graph />
			<Footer />
		</div>
	);
}

export default App;
