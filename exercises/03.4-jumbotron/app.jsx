import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Jumbotron = props => {
	//here you have to return expected html using the properties being passed to the component
	return (<div className="card m-5">
		<div className="card-body">
			<h5 className="card-title">{props.title}</h5>
			<p className="card-text">{props.description}</p>
			<a href={props.buttonURL} className="btn btn-primary">
					{props.buttonLabel}
				</a>
		</div>
	</div>)
};

Jumbotron.propTypes = {
	//proptypes here
	title: PropTypes.string,
	description: PropTypes.string,
	buttonLabel: PropTypes.string,
	buttonURL: PropTypes.string

};

ReactDOM.render(
	<Jumbotron
		title="Welcome to react"
		description="React is the most popular rendering library in the world"
		buttonLabel="Go to the official website"
		buttonURL="https://reactjs.org/"
	/>,

	document.querySelector("#myDiv")
);
