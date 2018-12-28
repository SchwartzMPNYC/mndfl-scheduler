import React, { Component } from "react";
import Session from "./session.js";

const CalendarDay = props => (
	<div>
		<div className="row"><h4>{props.date}</h4></div>

		<div className="row mb-4">
			{props.sessions.map(session => (
				<Session key={session.id} classInfo={session} />
			))}
		</div>
	</div>
);

export default CalendarDay;
