import React, { Component } from "react";

// const SickButton = styled.button`
//   background: ${props => props.theme.button_color};
//   color: white;
//   font-weight: 500;
//   border: 0;
//   border-radius: 0;
//   text-transform: uppercase;
//   font-size: 16px;
//   padding: 0.8rem 1.5rem;
//   display: inline-block;
//   transition: all 0.5s;
//   &[disabled] {
//     opacity: 0.5;
//   }
// `;

class SickButton extends Component {
  render() {
    return (
      <button
        onClick={() => this.props.onClick()}
        className="bg-blue-100 text-blue-700 py-2 px-4 rounded "
      >
        <span className="font-bold"> {this.props.children} </span>
      </button>
    );
  }
}

export default SickButton;
