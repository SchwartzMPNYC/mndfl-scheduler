import React, { Component } from "react";

const SearchButton = props => (
	<button type="button" className="col-sm-1 btn btn-light" onClick={props.fetchSessions}>Search</button>
);

export default SearchButton;
