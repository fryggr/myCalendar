import React, { Component } from 'react'
import './Hours.css'

class Hours extends Component {

    render() {
        return <div className = "Hours">{this.getHours()}</div>
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
            <div className="Hours__fill"></div>
            </div>
        ))
    }
}

export default Hours
