import React, { Component } from "react";
import "./Days.css";
import Week from "../Week/Week";


class Days extends Component {

  state = {
      days: []
  }

  fillDays = () => {

    let propDate = this.props.date;

    function getWeekDayOfMonth(propDate){
      let currentDate = propDate;
      let date = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0 );
      return date.getDay();
    }

    function getTotalDaysInMonth(propDate){
      let currentDate = propDate;
      return 32 - new Date(currentDate.getFullYear(), currentDate.getMonth(), 32).getDate();
    }

    function getTotalDaysInPrevMonth(propDate){
      let currentDate = propDate;
      return 32 - new Date(currentDate.getFullYear(), currentDate.getMonth()-1, 32).getDate();
    }

      let days = [];
      let currentDay = 1;
      let totalDaysCount = getTotalDaysInMonth(propDate);
      let totalDaysPrevCount = getTotalDaysInPrevMonth(propDate);
      let firstWeekDayOfMonth = getWeekDayOfMonth(propDate);
      let nextMonthDay = 1;

      days[0] = [];

      for (let i = firstWeekDayOfMonth-1; i >= 0; i--){
        days[0][i] = totalDaysPrevCount--;
      }

      for (let i = firstWeekDayOfMonth; i < 7; i++){
        days[0][i] = currentDay++;
      }

      for (let week = 1; week < 6; week++) {
        days[week] = [];
        for (let day = 0; day < 7; day++){

          if(currentDay > totalDaysCount) {
            days[week][day] = nextMonthDay++;
          }
          else {
            days[week][day] = currentDay++;
          }
        }
      }

      return days
  }

  render() {
    return (
      <div className="main">
        <table>
          <thead>
            <tr>
              <th >пн</th>
              <th>вт</th>
              <th>ср</th>
              <th>чт</th>
              <th>пт</th>
              <th>сб</th>
              <th>вс</th>
            </tr>
          </thead>
          <tbody>
            {
              this.fillDays().map((el, index) =>
                <Week
                  week = {el}
                  key = {index}
                />
              )
            }
          </tbody>
        </table>
      </div>
    );
  }
};

export default Days;
