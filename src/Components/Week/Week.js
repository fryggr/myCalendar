import React, { Component } from "react";
import Day from "../Day/Day";

class Week extends Component {

	render() {
	    return (
	      <tr>
			{
              this.props.week.map((el, index) =>
                <Day
                  day = {el}
				  key = {index}
                />
              )
            }
	      </tr>
	    );
	}
}

export default Week;
