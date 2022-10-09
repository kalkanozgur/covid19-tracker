import React, { useState, Fragment } from "react";

import { Combobox, Transition } from "@headlessui/react";
import { useDispatch } from "react-redux";
import { getAsyncApi } from "../../context/covid/covidSlice";

function Form({ countryList }) {
	const dispatch = useDispatch();
	const [selectedCountry, setSelectedCountry] = useState();
	const [query, setQuery] = useState("");
	const handleChange = (e) => {
		console.log(e);
		setSelectedCountry(e);
		dispatch(getAsyncApi(e));
	};

	const filteredCountry =
		query === ""
			? countryList.map((country) => country.name)
			: countryList.filter((country) => {
					return country.name.toLowerCase().includes(query.toLowerCase());
			  });

	return (
		<div className="flex flex-col items-center justify-center z-50 py-10">
			<div className="w-52">
				<Combobox value={selectedCountry} onChange={handleChange}>
					<div className="relative">
						<Combobox.Input
							placeholder="Enter country name"
							onChange={(event) => setQuery(event.target.value)}
							className="text-black py-1 px-2 rounded-xl outline-none relative focus:ring-0  pl-3 pr-10 text-sm leading-5"
						/>
					</div>
					<Transition
						as={Fragment}
						leave="transition ease-in duration-500"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
						afterLeave={() => setQuery("")}
					>
						<Combobox.Options className="absolute w-52 overflow-auto text-base z-50 text-black bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none">
							{filteredCountry.length === 0 && query !== "" ? (
								<div className="cursor-default select-none relative py-2 px-4 text-gray-700 z-50">
									Nothing found.
								</div>
							) : (
								filteredCountry.map((country, index) => (
									<Combobox.Option
										key={index}
										value={country.name}
										className={({ active }) =>
											`cursor-default select-none relative py-2 px-4 text-sm z-50 ${
												active ? "text-white bg-[#36D4C1]" : "text-gray-900"
											}`
										}
									>
										{country.name}
									</Combobox.Option>
								))
							)}
						</Combobox.Options>
					</Transition>
				</Combobox>
			</div>
		</div>
	);
}

export default Form;
