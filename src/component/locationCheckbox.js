import React, { Component } from "react";

const LocationCheckbox = props => (
	<div className="form-check form-check-inline text-light">
		<input
			type="checkbox"
			className="form-check-input"
			id={"location" + props.number}
			data-location-number={props.number}
			checked={props.checked}
			onChange={props.changeLocations}
		/>
		<label htmlFor={"location" + props.number} className="form-check-label">
			{props.name}
		</label>
	</div>
);

export default LocationCheckbox;
