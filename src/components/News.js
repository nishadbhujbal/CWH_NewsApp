import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=c3ccaecb001a45e0864b03adcc94ca9c";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles });
  }

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=c3ccaecb001a45e0864b03adcc94ca9c&page=${
      this.state.page - 1
    }`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  };

  handleNextClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=c3ccaecb001a45e0864b03adcc94ca9c&page=${
      this.state.page + 1
    }`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
    });
  };

  render() {
    return (
      <>
        <h1 className="font-semibold text-2xl text-center p-4">
          NewsMonkey - Top Headlines
        </h1>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 mx-8">
          {this.state.articles.map((element) => {
            return (
              <NewsItem
                key={element.url}
                title={element.title ? element.title : "..."}
                description={element.description ? element.description : "..."}
                newsUrl={element.url}
                imageUrl={
                  !element.urlToImage
                    ? "https://img.apmcdn.org/7e1e37d9b02cc6a192aaa71846d6d4623a7b38d3/widescreen/b3c673-20240627-ap-flooding01-2000.jpg"
                    : element.urlToImage
                }
              ></NewsItem>
            );
          })}
        </div>
        <div className="flex justify-evenly items-center gap-4 my-4">
          <button
            id="prev"
            className="bg-blue-700 rounded-md p-2 text-white"
            onClick={this.handlePrevClick}
            disabled={this.state.page <= 1}
            style={{
              opacity: this.state.page <= 1 ? "0.7" : "1",
            }}
          >
            &larr; Previous
          </button>
          <button
            id="next"
            className="bg-blue-700 rounded-md p-2 text-white"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </>
    );
  }
}

export default News;
