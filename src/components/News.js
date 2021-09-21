import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
      loading: true,
      totalResults: 0,
    };
  }

  async updateNews() {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=db8cba7cb22c469796ff946f96ca3317&page=${
      this.state.page + 1
    }&pageSize=4`;
    this.props.setProgress(30);
    this.setState({ loading: true });
    let news = await fetch(url);
    let parsedNews = await news.json();
    this.props.setProgress(70);
    console.log(parsedNews);
    this.setState({
      articles: parsedNews.articles,
      totalResults: parsedNews.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updateNews();
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=db8cba7cb22c469796ff946f96ca3317&page=${
      this.state.page + 1
    }&pageSize=4`;
    let news = await fetch(url);
    let parsedNews = await news.json();
    console.log(parsedNews);
    this.setState({
      articles: this.state.articles.concat(parsedNews.articles),
      totalResults: parsedNews.totalResults,
      loading: false,
    });
  };

  // handleNextClick = async () => {
  //   console.log("Next")
  //   this.updateNews();
  //   this.setState({
  //     page: this.state.page + 1,
  //   })
  // }

  // handlePrevClick = async () => {
  //   console.log("Next")
  //   this.updateNews();
  //   this.setState({
  //     page: this.state.page - 1,
  //   })
  // }

  render() {
    return (
      <>
        <h1 className="text-2xl font-semibold text-center my-5">
          TOP-HEADLINES
        </h1>
        {/* {this.state.loading && <Spinner />} */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={this.state.articles.length && <Spinner />}
        >
          <div className="flex justify-center -mt-5">
            <div className="lg:grid grid-cols-2">
              {this.state.articles &&
                this.state.articles.map((element) => {
                  // console.log("hello test")
                  return (
                    <div key={element.url}>
                      <NewsItem
                        title={element.title}
                        description={element.description}
                        imageUrl={element.urlToImage}
                        url={element.url}
                        source={element.source.name}
                        publishedAt={element.publishedAt}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </InfiniteScroll>

        {/* <div className="flex justify-evenly m-10">
          <button disabled={this.state.page <= 1} onClick={this.handlePrevClick} className="bg-blue-400 font-semibold text-white p-1 w-10 rounded-full hover:bg-blue-600 focus:outline-none focus:ring shadow-lg hover:shadow-none  m-5"><i className="fas fa-chevron-left"></i></button>
          <div className="bg-blue-400 text-center font-semibold text-white p-1 w-16 rounded-full m-5">{this.state.page}</div>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 4)} onClick={this.handleNextClick} className="bg-blue-400 font-semibold text-white p-1 w-10 rounded-full hover:bg-blue-600 focus:outline-none focus:ring shadow-lg hover:shadow-none  m-5"><i className="fas fa-chevron-right"></i></button>
        </div> */}
      </>
    );
  }
}

export default News;

// https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=db8cba7cb22c469796ff946f96ca3317 yogesh
// https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=cd358b752a104d7db2c883481c633a17 prince
