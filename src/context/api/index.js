import axios from "axios";
const baseUrl = "https://covid19.mathdro.id/api";
export const fetchApi = async (country) => {
	console.log(`${baseUrl}${country ? `/countries/${country}` : ""}`);
	const res = await axios(
		`${baseUrl}${country ? `/countries/${country}` : ""}`
	);
	console.log(res.data);
	return res.data;
};
