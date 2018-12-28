import React, { Component } from "react";

import LocationCheckbox from "./locationCheckbox.js";

export class Locations extends Component {
	constructor(props) {
		super(props);
		this.state = {
			locations: props.locations
		};
	}

	render() {
		return (
			<div className="col-sm-5 col-lg-4">
				{this.state.locations.map((loc, index) => (
					<LocationCheckbox
						key={index}
						number={index}
						name={loc[1]}
						checked={loc[0]}
						changeLocations={this.props.changeHandler}
					/>
				))}
			</div>
		);
	}
}

export default Locations;
