import React, { Component } from 'react'
import './Hours.css'

class Hours extends Component {


    render() {
        const { events } = this.props
        return <div className = "Hours">
            {/*<div className="Hours__wrapper">
                {events.map((event) => (
                    <div className="Hours__fill" style={event.style}>
                        {event.name}
                    </div>
                ))}
            </div>*/}
            {this.getFill()}
            {this.getHours()}
        </div>
    }

    getFill = () => {
        const { events } = this.props
        let prevID = events[0].id
        let eventsCount = 0;
        for (let i = 0; i < events.length; i++) {
            if(events[i].id === prevID){
                eventsCount++
            }
            else {
                break;
            }
        }
        let width = 0;
        events.forEach((event, index) => {

            event.style.width = parseInt(event.style.width)/eventsCount + '%';
            if( index === 0 ) width = parseInt(event.style.width)/eventsCount;
            console.log(width);
            event.style.left = width*(index) + '%'
            console.log(event.style.left);

        })

        return <div className="Hours__wrapper">
            {events.map((event) => (
                <div className="Hours__fill" style={event.style}>
                    {event.name}
                </div>
            ))}
        </div>
    }


    // getWrapper = () => {
    //     const { events } = this.props
    //     let prevID = events[0].id
    //     <div className="Hours__wrapper">
    //         for (let i = prevIndex; i < events.length; i++) {
    //             if(events[i].id === prevID){
    //                 prevID = events[i].id
    //                 <div className="Hours__fill" style={events[i].style}>
    //                     {events[i].name}
    //                 </div>
    //             }
    //             else break
    //         }
    //     </div>
    // }

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
