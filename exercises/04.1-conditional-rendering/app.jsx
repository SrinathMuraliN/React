import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";


const Alert = props => {
	const Alert = props => {
		//add the condition inside this function

		return (
			<div className={`alert {colorClasses[props.color]} `} role="alert">
				This is a primary alert-check it out!
			</div>
		);

	};

};

const colorClasses = {
    'red': 'alert-danger',
    'orange': 'alert-warning'
}

Alert.propTypes = {
	color: PropTypes.string,
	text: PropTypes.string
};

// here is where the alert component is being used, you don't have to edit this part,
// but it helps you understand what properties are being passed to the component
ReactDOM.render(
	<div>
		<Alert text="OMG! Something really bad has happended!" color="red" />
		<Alert text="Well, it is not that bad after all!" color="orange" />
	</div>,
	document.querySelector("#myDiv")
);
