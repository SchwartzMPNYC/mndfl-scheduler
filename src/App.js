import React, { Component } from "react";

import "./App.css";

import CalendarDay from "./component/calendarDay.js";
import SnackBar from "./component/snackbar.js";

import fetchData from "./logic/mndflParse.js";

const moment = require("moment");

class App extends Component {
	constructor() {
		super();
		this.changeDate = this.changeDate.bind(this);
		this.changeLocations = this.changeLocations.bind(this);

		this.state = {
			locations: [[true,'Greenwhich Village'], [false,'UES'], [false,'Willaimsburg']],
			startDate: moment(),
			endDate: moment().add(6, "days")
		};

		this.fetchSessions();
	}

	fetchSessions = () => {
		if (this.state.startDate && this.state.endDate) {
			if (document.getElementById("spinner")) {
				document.getElementById("spinner").classList.remove("hidden");
				document.getElementById("app").classList.add("hidden");
			}
			fetchData(
				this.state.locations,
				this.state.startDate,
				this.state.endDate
			)
				.then(sessions => this.setState({ sessions }))
				.then(() => {
					document.getElementById("spinner").classList.add("hidden");
					document.getElementById("app").classList.remove("hidden");
				});
		}
	};

	changeDate({ startDate, endDate }) {
		this.setState({ startDate, endDate });
	}

	changeLocations(location){
		const toggleLocation = location.currentTarget.dataset.locationNumber;
		let changeLocs = this.state.locations;
		changeLocs[toggleLocation][0] = !changeLocs[toggleLocation][0];
		this.setState({locations: changeLocs});
	}

	render() {
		return (
			<div className="App">
				<div className="spinner" id="spinner" />

				<div className="hidden" id="app">
					<div className="container">
						{this.state.sessions
							? Object.entries(
									this.state.sessions.reduce((acc, curr) => {
										if (!acc[curr.displayDate])
											acc[curr.displayDate] = [];

										acc[curr.displayDate].push(curr);
										return acc;
									}, {})
							  ).map(date => (
									<CalendarDay
										key={date[0]}
										date={date[0]}
										sessions={date[1]}
									/>
							  ))
							: ""}
					</div>

					<SnackBar
						locations={this.state.locations}
						startDate={this.state.startDate}
						endDate={this.state.endDate}
						changeDate={this.changeDate}
						changeLocations={this.changeLocations}
						fetchSessions={this.fetchSessions}
					/>
				</div>
			</div>
		);
	}
}

export default App;
