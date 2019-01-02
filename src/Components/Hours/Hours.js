import React, { Component } from 'react'
import './Hours.css'

class Hours extends Component {


    render() {
        const { events } = this.props
        return <div className = "Hours">
            {<div className="Hours__wrapper">
                {events.map((event) => (
                    <div className="Hours__fill" style={event.style}>
                        {event.name}
                    </div>
                ))}
            </div>}
            {this.getHours()}
        </div>
    }

    getHours() {
        const { hours } = this.props
        return hours.map((hour, index) => (
            <div
                className = "Hours__item"
                key = {index}
            >
            <div className="Hours__text">{hour}</div>
            <div className="Hours__line"></div>

            </div>
        ))
    }


}

export default Hours
