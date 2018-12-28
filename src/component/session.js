import React from "react";

const Session = (props) => {
	let href = `https://www.mndflmeditation.com/greenwich-village.html#/week/${props.classInfo.id}`;
	return (
		<a className="card col-sm-6 col-md-3" href={href}>
			<div className="card-body">
				<h5 className="card-title">{props.classInfo.name}</h5>

				<div className="">
					<ul className="list-unstyled">
						<li className="card-text text-left"><b>Instructor:</b> {props.classInfo.instructor}</li>
						<li className="card-text text-left"><b>Location:</b> {props.classInfo.location}</li>
						<li className="card-text text-left"><b>Available seats:</b> {props.classInfo.availableSeats}</li>
						{/*<li className="card-text text-left"><b>Date:</b> {props.classInfo.displayDate}</li>*/}
						<li className="card-text text-left"><b>Start time:</b> {props.classInfo.start}</li>
						{/*<li className="card-text text-left"><b>Length:</b> {props.classInfo.duration}</li>*/}
					</ul>
				</div>
			</div>
		</a>
	)
};

export default Session;