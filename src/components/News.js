import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c3ccaecb001a45e0864b03adcc94ca9c&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: "true" });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  handlePrevClick = async () => {
    this.setState(window.scrollTo(0, 0));
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=c3ccaecb001a45e0864b03adcc94ca9c&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: "true" });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
  };

  handleNextClick = async () => {
    this.setState(window.scrollTo(0, 0));
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / 20))) {
      let url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${
        this.props.category
      }&apiKey=c3ccaecb001a45e0864b03adcc94ca9c&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({ loading: "true" });
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false,
      });
    }
  };

  render() {
    return (
      <>
        <h1 className="font-semibold text-2xl text-center p-4 md:p-6">
          NewsMonkey - Top Headlines
        </h1>
        {this.state.loading && <Spinner />}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 mx-8">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <NewsItem
                  key={element.url}
                  title={element.title ? element.title : "..."}
                  description={
                    element.description ? element.description : "..."
                  }
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
        <div className="flex justify-around items-center gap-4 my-4 mx-8">
          <button
            id="prev"
            className="bg-blue-600 rounded-md p-2 text-white hover:bg-blue-500"
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
            className="bg-blue-600 rounded-md p-2 text-white hover:bg-blue-500"
            onClick={this.handleNextClick}
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            style={{
              opacity:
                this.state.page + 1 >
                Math.ceil(this.state.totalResults / this.props.pageSize)
                  ? "0.7"
                  : "1",
            }}
          >
            Next &rarr;
          </button>
        </div>
      </>
    );
  }
}

export default News;
