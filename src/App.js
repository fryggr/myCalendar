import React, { Component } from "react";
import "./App.css";
import { Month } from "./Components/Month/Month";
import Days from "./Components/Days/Days";
import Hours from "./Components/Hours/Hours";

class App extends Component {

  state = {
      date: new Date()
  }

  newDay() {
    let currentDate = this.state.date;
    let newDay = currentDate.getDay();
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

  getHours() {
      let hours = []
      for (let i = 0; i < 24; i++) {
          hours.push(i)
      }
      return hours
  }

  selectHours() {
      return this.getHours().map(hour => (
          <option value={hour}>{hour}</option>
      ))
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s8">
              <Hours
                  hours = {this.getHours()}
              />
          </div>
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
          <div className="col s4">
              <h3>Новое событие</h3>
              <input type="text" placeholder="Название события"/>
              <select className="browser-default">
                  <option value="" disabled selected>Начало события</option>
                  {this.selectHours()}
              </select>
              <select className="browser-default">
                  <option value="" disabled selected>Конец события</option>
                  {this.selectHours()}
              </select>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
