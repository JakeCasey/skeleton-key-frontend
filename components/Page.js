import React, { Component } from 'react';
import Header from './Header';
import Meta from './Meta';

class Page extends Component {
  render() {
    return (
      <div data-section="page" className="min-h-screen bg-nimbus-gray">
        <Meta />
        <div className="min-h-screen border-l-8 md:flex border-ds-navy">
          <Header />
          <div
            data-section="content"
            className="w-full h-screen overflow-scroll"
          >
            <div>{this.props.children}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Page;
