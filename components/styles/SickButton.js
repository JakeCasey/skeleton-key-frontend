import React, { Component } from 'react';

class SickButton extends Component {
  render() {
    return (
      <button
        onClick={() => this.props.onClick()}
        className="px-4 py-2 text-blue-700 bg-blue-100 rounded "
      >
        <span className="font-bold"> {this.props.children} </span>
      </button>
    );
  }
}

export default SickButton;
