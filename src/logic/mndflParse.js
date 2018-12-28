// const https = require("https");
const fetch = require("node-fetch");

const moment = require("moment");
const tz = require("moment-timezone");

const generateUrl = require("./mndflurl.js");

/*
locations 
48057: Greenwhich Village
48056: UES
48058: Willaimsburg
*/

const getData = async url => {
	try {
		const request = await fetch(url);

		const json = await request.json();

		const data = await json.data
			.map(session => ({
				attributes: session.attributes,
				id: session.id
			}))
			.map(session => {
				let date = moment(session.attributes.start_datetime);
				return {
					name: session.attributes.class_type_display.replace(/M N D F L \|?/,''),
					availableSeats: session.attributes.available_spots.length,
					instructor: session.attributes.instructor_names.join(", "),
					sortDate: date,
					displayDate: date.format("dddd, MMM Do"),
					start: date.tz("America/New_York").format("h:mm a"),
					duration: `${session.attributes.duration} min.`,
					location: session.attributes.location_display,
					id: session.id
				};
			});

		return data;
	} catch (e) {
		console.log(e);
	}
};

const fetchData = async (locations, startDate, endDate) => {
	try {
		let url = generateUrl(
			locations.reduce((acc, curr, ind) => {
				if (curr[0]) acc.push(ind);
				return acc;
			}, []),
			startDate.format("YYYY-MM-DD"),
			endDate.format("YYYY-MM-DD")
		);

		let data = await getData(url);
		return data;
	} catch (e) {
		console.log(e);
		return;
	}
};

export default fetchData;
