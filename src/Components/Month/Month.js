import React from 'react';
import './Month.css';

export const Month = (props) => {
  return (
    <div className="header">
      <div className="header__icon header__icon--prev" onClick={props.getPrevMonth}>
        <i className="material-icons small">arrow_back</i>
      </div>
      <h5 className="header__date">{props.date.toLocaleDateString()}</h5>
      <div className="header__icon header__icon--next" onClick={props.getNextMonth}>
        <i className="material-icons small">arrow_forward</i>
      </div>
    </div>
  )
}
