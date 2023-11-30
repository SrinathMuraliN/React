import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";

const BootstrapCard = props => {
	// 1) replace the hard-coded image, description, link, etc. With their property variable.
	return (
		<div className="card m-5">
			<img className="card-img-top" src={props.imageURL} alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.description}</p>
				<a href={props.buttonLink} className="btn btn-primary">
					{props.buttonDescription}
				</a>
			</div>
		</div>
	);
};
BootstrapCard.propTypes = {
	title: PropType.string,
	// 2) add here the new properties into the proptypes object
	imageURL: PropType.string,
	description: PropType.string,
	buttonLink: PropType.string,
	buttonDescription:PropType.string
};


// 3) Use ReactDOM to add the component into then DOM element #myDiv
ReactDOM.render(<BootstrapCard
				title = "Paul Mccartney"
				imageURL="https://github.com/4GeeksAcademy/react-tutorial-exercises/blob/master/.learn/assets/Dylan.png?raw=true"
				description = "Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter."
				buttonLink = "https://en.wikipedia.org/wiki/Bob_Dylan"
				buttonDescription = "Go to wikipedia"
				/>,document.querySelector("#myDiv"))
