import React, { Component } from "react";

import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

export class DatePicker extends Component {
	constructor(props) {
		super();
		this.state = {};
	}

	render() {
		return (
			<div className="col-sm-4 text-sm-center">
				<DateRangePicker
					startDate={this.props.startDate}
					startDateId="startDate"
					endDate={this.props.endDate}
					endDateId="endDate"
					onDatesChange={this.props.changeDate}
					focusedInput={this.state.focusedInput}
					onFocusChange={focusedInput =>
						this.setState({ focusedInput })
					}
					openDirection="up"
					minimumNights={0}
				/>
			</div>
		);
	}
}

export default DatePicker;
