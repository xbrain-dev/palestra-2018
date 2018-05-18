import React, { Component } from 'react';

export default class TextField extends Component {
  render() {
    return (
      <div className="form-group">
        <label>{this.props.label}</label>
        <input className="form-control" type="text" {...this.props} />
      </div>
    );
  }
}
