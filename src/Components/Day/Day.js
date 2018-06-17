import React from "react";
// import "./Day.css";

class Day extends React.Component {

	render() {
	    return (
	      <td> {this.props.day} </td>
	    );
	}
}

export default Day;