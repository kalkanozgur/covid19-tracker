import React, { useState, Fragment, useEffect } from "react";
import { useSelector } from "react-redux";

import { Combobox, Transition } from "@headlessui/react";

function Form() {
	const countries = useSelector((state) => state.covid.countryList);
	const isLoading = useSelector((state) => state.covid.isLoading);
	const countryList = countries.map((country) => country.name);
	const [selectedCountry, setSelectedCountry] = useState();
	const [query, setQuery] = useState("");

	useEffect(() => {
		!isLoading && setSelectedCountry(countryList[0]);

		return () => {};
	}, [countries]);

	const filteredCountry =
		query === ""
			? countryList
			: countryList.filter((country) => {
					return country.toLowerCase().includes(query.toLowerCase());
			  });

	console.log(isLoading);
	return (
		!isLoading && (
			<div className="flex flex-col items-center justify-center">
				<div className="w-52 fixed">
					<Combobox value={selectedCountry} onChange={setSelectedCountry}>
						<div className="">
							<Combobox.Input
								onChange={(event) => setQuery(event.target.value)}
								className="text-black py-1 px-2 rounded-xl outline-none relative focus:ring-0  pl-3 pr-10 text-sm leading-5"
							/>
						</div>
						<Transition
							as={Fragment}
							leave="transition ease-in duration-100"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
							afterLeave={() => setQuery("")}
						>
							<Combobox.Options className="absolute w-full overflow-auto text-base text-black bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none">
								{filteredCountry.length === 0 && query !== "" ? (
									<div className="cursor-default select-none relative py-2 px-4 text-gray-700">
										Nothing found.
									</div>
								) : (
									filteredCountry.map((country) => (
										<Combobox.Option
											key={country}
											value={country}
											className={({ active }) =>
												`cursor-default select-none relative py-2 px-4 text-sm ${
													active ? "text-white bg-[#36D4C1]" : "text-gray-900"
												}`
											}
										>
											{country}
										</Combobox.Option>
									))
								)}
							</Combobox.Options>
						</Transition>
					</Combobox>
				</div>
			</div>
		)
	);
}

export default Form;
