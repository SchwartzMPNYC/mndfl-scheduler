import React, { Component } from "react";
import Session from "./session.js";

const CalendarDay = props => (
	<div>
		<div className="row">
			<div className="col-sm">
				<h4>{props.date}</h4>
			</div>
		</div>

		<div className="row">
			{props.sessions.map(session => (
				<Session key={session.id} classInfo={session} />
			))}
		</div>
	</div>
);

export default CalendarDay;
