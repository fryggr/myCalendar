import React, { Component } from 'react';

class Month extends React.Component {
  constructor(props){
    super(props);

    // this.getNextMonth = this.getNextMonth.bind(this);
  }



  render() {
    console.log(this.props);
    const getNextMonth = this.props.getNextMonth;
    return (
      <div className="header">
        <div className="header__icon header__icon--prev">
          <i className="material-icons small">arrow_back</i>
        </div>
        <h5 className="header__date">{this.props.shit}</h5>
        <div className="header__icon header__icon--next" onClick={this.props.getNextMonth}>
          <i className="material-icons small">arrow_forward</i>
        </div>
      </div>
    );
  }
};

export default Month;
