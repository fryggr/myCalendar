import React, { Component } from 'react'
import './Hours.css'

class Hours extends Component {

    render() {
        const { events } = this.props
        console.log(events);
        return <div className = "Hours">
            <div className="Hours__wrapper">
                {events.map((event) => (
                    <div className="Hours__fill" style={event.style}>
                        {event.name}
                    </div>
                ))}
             </div>
            {/*this.getFill()*/}
            {this.getHours()}
        </div>
    }

    getFill = () => {
        // const { events } = this.props
        //
        // if (events.length !== 0)
        //     {
        //         let prevID = events[0].id
        //         let prevIndex = 0
        //
        //         for(let i = prevIndex; i < events.length; i++){
        //             return{
        //                 <div className="Hours__wrapper">
        //                     return {  events.map((event, index) => {
        //
        //                         event.id === prevID ? (
        //                             console.log(event),
        //                             <div className="Hours__fill" style={event.style}>
        //                                 {event.name}
        //                             </div>,
        //                             prevID = event.id
        //                         ) : (
        //                             prevIndex = index,
        //                             prevID = event.id
        //                         )
        //                     })}
        //                 </div>
        //             }
        //         }
        //     }
        //     else return null
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
