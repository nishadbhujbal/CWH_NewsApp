import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    return (
      <>
        <div
          id="card"
          className="flex flex-col border border-black w-full h-auto sm:w-[32%] sm:h-[20%]"
        >
          <div className="font-semibold text-2xl">Title</div>
          <p>Description</p>
        </div>
      </>
    );
  }
}

export default NewsItem;
