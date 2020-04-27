import React, { Component } from 'react';
import Link from 'next';
import Meta from './Meta';
import SideNav from './SideNav';
import Header from './Header';

class Page extends Component {
  render() {
    return (
      <div className="">
        <Meta />
        {/* <TopBar /> */}
        <div className="flex h-screen">
          <Header />
          <SideNav />
          <main className="relative z-0 flex-1 pt-2 pb-6 overflow-y-auto bg-gray-100 focus:outline-none md:py-6">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
              <div className="py-4">{this.props.children}</div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Page;
