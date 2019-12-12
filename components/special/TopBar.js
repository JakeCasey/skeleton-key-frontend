import React, { Component } from "react";
import Link from "next/link";

export default class TopBar extends Component {
  render() {
    return (
      <div className="flex justify-center py-3 bg-blue-500">
        <div>
          <Link href="/blog">
            <p className="font-semibold text-white border-b-2 border-white cursor-pointer">
              {" "}
              🎉 A bar for announcements 🎉
            </p>
          </Link>
        </div>
      </div>
    );
  }
}
