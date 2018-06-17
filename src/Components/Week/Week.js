import React from "react";
// import "./Week.css";
import Day from "../Day/Day";

class Week extends React.Component {

	render() {
	    return (
	      <tr>
			{
              this.props.week.map(el =>
                <Day
                  day={el}
                />
              ) 
            }
	      </tr>
	    );
	}
}

export default Week;