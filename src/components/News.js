import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  render() {
    return (
      <>
        <h1 className="font-semibold text-2xl text-center pb-2">
          NewsMonkey - Top Headlines2
        </h1>
        <div className="w-full h-screen flex flex-col pl-4 gap-4 sm:flex-row sm:flex-wrap border border-black">
          <NewsItem></NewsItem>
          <NewsItem></NewsItem>
          <NewsItem></NewsItem>
          <NewsItem></NewsItem>
          <NewsItem></NewsItem>
          <NewsItem></NewsItem>
          <NewsItem></NewsItem>
          <NewsItem></NewsItem>
        </div>
      </>
    );
  }
}

export default News;
