import React, { PureComponent } from 'react';
import Card from '../styles/Card';
import classNames from 'classnames';

class Modal extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let classname = classNames(
      this.props.visible ? '' : 'hidden',
      this.props.className,
      'absolute top-0 bottom-0 left-0 right-0 bg-gray-400 opacity-75'
    );
    return (
      <div className={classname}>
        <Card className="relative max-w-3xl mx-auto my-auto mt-10">
          <div
            className="absolute top-0 right-0 p-3 cursor-pointer"
            onClick={() => this.props.closeModal(this.props.name)}
          >
            <svg
              className="w-8 h-8 text-gray-800 "
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>

          {this.props.children}
        </Card>
      </div>
    );
  }
}

export default Modal;
