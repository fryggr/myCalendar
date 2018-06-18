import React from "react";
// import "./Day.css";

class Day extends React.Component {

	constructor(props) {
    super(props);
  }

	render() {
	    return (
	      <td> {this.props.day} </td>
	    );
	}
}

export default Day;
