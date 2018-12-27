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
      eventID: '',
      events: [
          {
              id: 'c3ef',
              style: {
                top: 270,
                height: 180,
                background: 'rgba(156, 39, 176, 0.38)'
              },
              name: 'Test',
              start: '4',
              end: '7',
              isCrossing: false
          },
          {
              id: '0f2a',
              style: {
                top: 210,
                height: 180,
                background: 'rgba(156, 39, 176, 0.38)'
              },
              name: 'Test1',
              start: '3',
              end: '6',
              isCrossing: false
          }
      ],
      prevCrossing: {}
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
      const top = eventStart * 60 + 30
      const height = Math.abs(eventEnd - eventStart) * 60;
      let eventID = (((1+Math.random())*0x10000)|0).toString(16).substring(1)
      const style = {
          top: top,
          height: height,
          background: '#9c27b061'
      }
      const events = this.state.events.slice()
      console.log(events, this.eventsCrossing());
      this.eventsCrossing() ? eventID = this.state.eventID : eventID
      events.push({
          id: eventID,
          style: style,
          name: this.state.eventName,
          start: this.state.eventStart,
          end: this.state.eventEnd,
          isCrossing: this.eventsCrossing()
      })
      this.setState({ events: events, eventID: eventID })
  }

  handleChange = (type) => (event) => {
      // const array = event.target.value.split(':')
    this.setState({[type]: event.target.value});
  }

  eventsCrossing = () => {
      const events = this.state.events.slice()
      events.forEach(event => {
          if ((event.end <= this.state.eventEnd && event.start <= this.state.eventStart) || (event.start >= this.state.eventStart && event.end >= this.state.eventEnd)) {
              console.log('Events crossing');
             return true
          }
          else return false
      })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s8">
              <Hours
                  hours = {this.getHours()}
                  events = {this.state.events}
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
                  {/*<input type="time" onChange={this.handleChange('eventTime')}/>*/}
                  <button type="button" onClick={this.getFill} className="btn waves-effect waves-light btn-small">Создать событие</button>
              </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
