import React from "react";
import "./Days.css";

// function getWeekDayOfMonth(date, number){
//   let currentDate = new Date()
//   let date = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0 );
//   return date.getDay();
// }
//
// function getTotalDaysInMonth(date){
//   let currentDate = new Date()
//   let date = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0 );
//   let reg = /[0-9]{2}/g;
//   let arr = reg.exec(date.toDateString());
//   return parseInt(arr[0]);
// }
//
// function fillDays(date, firstWeekDayOfMonth){
//   let days = [];
//   let currentDay = 1;
//   let totalDaysCount = getTotalDaysInMonth();
//   let firstWeekDayOfMonth = getWeekDayOfMonth();
//   days[0] = [];
//   // days[0][firstWeekDayOfMonth] = currentDay++;
//   for (let i = firstWeekDayOfMonth; i < 6; i++){
//     days[0][i] = currentDay++;
//   }
//
//   outer: for (let week = 1; week < 6; week++) {
//     for (let day = 0; day < 7; day++){
//       days[week][day] = currentDay++;
//       if(currentDay > totalDaysCount) break outer;
//     }
//   }
//
//   console.log(days);
//
//   // for (let rowIndex = 1; rowIndex < 6 && currentDay <= totalDaysCount; rowIndex++){
//   //   days[rowIndex][] = [];
//   // }
// }
//
// fillDays();

function getWeekDayOfMonth(){
  let currentDate = new Date()
  let date = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0 );
  return date.getDay();
}

function getTotalDaysInMonth(){
  let currentDate = new Date()
	return 32 - new Date(currentDate.getFullYear(), currentDate.getMonth(), 32).getDate();
}

function getTotalDaysInPrevMonth(){
  let currentDate = new Date()
	return 32 - new Date(currentDate.getFullYear(), currentDate.getMonth()-1, 32).getDate();
}

function fillDays(){
  let days = [];
  let currentDay = 1;
  let totalDaysCount = getTotalDaysInMonth();
  let totalDaysPrevCount = getTotalDaysInPrevMonth();
	let firstWeekDayOfMonth = getWeekDayOfMonth();
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

  console.log(days);

}

fillDays();

const Days = (props) => {
  return (
    <div className="main">
      <table>
        <tbody>
          <tr>
            <th>пн</th>
            <th>вт</th>
            <th>ср</th>
            <th>чт</th>
            <th>пт</th>
            <th>сб</th>
            <th>вс</th>
          </tr>
          <tr>
            {/* <td data-week="1" ref='myTableCell1'>{this.newDay()}</td> */}
            {this.getTd(0)}
          </tr>
        </tbody>
      </table>
    </div>
  );
};
