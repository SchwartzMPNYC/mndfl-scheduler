import React, { Component } from "react";

import Locations from "./locations.js";
import DatePicker from "./datePicker.js";
import SearchButton from "./searchButton.js";

const Snackbar = props => (
	<div className="container-fluid sticky-footer">
		<div className="row h-100 align-items-center">
			<DatePicker
				startDate={props.startDate}
				endDate={props.endDate}
				changeDate={props.changeDate}
			/>

			<Locations
				locations={props.locations}
				changeHandler={props.changeLocations}
			/>

			<SearchButton 
				fetchSessions={props.fetchSessions}
			/>
		</div>
	</div>
);

export default Snackbar;