const generateUrl = (selectedLocations = [1, 2, 3], startDate, endDate) => {

	const locations = {
		0: { name: "Greenwhich Village", code: "48057" },
		1: { name: "UES", code: "48056" },
		2: { name: "Willaimsburg", code: "48058" }
	};

	const urlParts = {
		protocol: "https:",
		hostname: "mndfl.marianatek.com",
		pathname: "/api/class_sessions",
		params: '?'+Object.entries({
			include: "available_primary_spots,available_secondary_spots,class_session_type,standby_availability",
			location: selectedLocations
				.map(location => locations[location].code),
			max_date: endDate,
			min_date: startDate,
			ordering: "start_datetime",
			page_size: "100"
		})
			.map((param) => `${param[0]}=${encodeURIComponent(param[1])}`)
			.join("&")
	};

	return new URL(urlParts.protocol+urlParts.hostname+urlParts.pathname+urlParts.params).href;
};

module.exports = generateUrl;
// console.log(generateUrl())