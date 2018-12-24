import React, { Component } from "react";
import "./App.css";
import { Month } from "./Components/Month/Month";
import Days from "./Components/Days/Days";
import Hours from "./Components/Hours/Hours";

class App extends Component {

  state = {
      date: new Date(),
      eventName: '',
      eventStart: '',
      eventEnd: '',
      style: {}
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
      return this.getHours().map((hour, index) => (
          <option value={hour} key={index}>{hour}</option>
      ))
  }

  getFill = () => {
      const { eventStart, eventEnd } = this.state
      const top = eventStart * 41 + 20
      const height = Math.abs(eventEnd - eventStart) * 41
      const style = {
          top: top,
          height: height,
          background: '#9c27b03b'
      }
      this.setState({ style: style })
  }

  handleChange = (type) => (event) => {
    this.setState({[type]: event.target.value});
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s8">
              <Hours
                  hours = {this.getHours()}
                  style = {this.state.style}
                  name = {this.state.eventName}
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
              <form>
                  <input
                      type="text"
                      placeholder="Название события"
                      value={this.state.eventName}
                      onChange={this.handleChange('eventName')}/>
                  <select
                      className="browser-default"
                      value={this.state.eventStart}
                      onChange={this.handleChange('eventStart')}
                  >
                      <option value="" disabled selected>Начало события</option>
                      {this.selectHours()}
                  </select>
                  <select
                      className="browser-default"
                      value={this.state.eventEnd}
                      onChange={this.handleChange('eventEnd')}
                  >
                      <option value="" disabled selected>Конец события</option>
                      {this.selectHours()}
                  </select>
                  <button type="button" onClick={this.getFill} className="btn waves-effect waves-light btn-small">Создать событие</button>
              </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
