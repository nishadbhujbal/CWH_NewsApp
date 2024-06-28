import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  render() {
    return (
      <>
        <h1 className="font-semibold text-2xl text-center pb-2">
          NewsMonkey - Top Headlines2
        </h1>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
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
