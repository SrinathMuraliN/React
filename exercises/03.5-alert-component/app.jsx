import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

/**
 * here you have declare your Alert component and return
 * the html that bootstrap dictates for its alert component
 */
const Alert = (props) => {
    return (
            <div>
                <p> {props.text}</p>
            </div>
    );
}

Alert.propTypes = {
    text:PropTypes.string
};



// here is where the alert component is being used, you don't have to edit this part,
// but it helps you understan what properties is the component using
ReactDOM.render(<Alert text="OMG! Something really bad has happended!" />, document.querySelector("#myDiv"));
