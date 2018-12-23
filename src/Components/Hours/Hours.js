import React, { Component } from 'react'
import './Hours.css'

class Hours extends Component {

    render() {
        const { style } = this.props
        console.log(style);
        return <div className = "Hours">
            <div className="Hours__fill" style={style}></div>
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
