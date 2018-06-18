import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Month } from "./Components/Month/Month";
import Days from "./Components/Days/Days";

class App extends Component {
  constructor(props) {
    super(props);
    const newDate = new Date().getTime();
    this.state = {
      date: new Date()
    };

    this.newDay = this.newDay.bind(this);
    this.getNextMonth = this.getNextMonth.bind(this);
    this.getPrevMonth = this.getPrevMonth.bind(this);
  }

  newDay() {
    let currentDate = this.state.date;
    let newDay = currentDate.getDay();
    console.log(this.day);
    if (newDay === this.day) {
      return newDay;
    }
  }

  getNextMonth() {
    let currentDate = this.state.date;
    currentDate.setMonth(currentDate.getMonth() + 1);
    this.setState({ date: currentDate });
  
  }

  getPrevMonth() {
    let currentDate = this.state.date;
    currentDate.setMonth(currentDate.getMonth() - 1);
    this.setState({ date: currentDate });
  }

  getTd(number) {
    return <td>{number}</td>;
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s4" />
          <div className="col s4">
            <Month
              getPrevMonth={this.getPrevMonth}
              getNextMonth={this.getNextMonth}
              date={this.state.date}
            />
            <Days
              date={this.state.date}
            />
          </div>
          <div className="col s4" />
        </div>
      </div>
    );
  }
}

export default App;
