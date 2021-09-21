import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, url, source } = this.props;
    return (
      <>
        <div className="bg-white p-2 mt-7 mx-5 w-50 max-w-lg sm:w-full  inner-shadow sm:p-4 h-auto sm:h-64 rounded-2xl shadow-2xl  flex flex-col sm:flex-row gap-5 select-none">
          <div
            style={{
              backgroundImage: `url(${
                imageUrl
                  ? imageUrl
                  : "https://drukasia.com/images/stripes/drukair.jpg"
              })`,
            }}
            alt="newsImage"
            className="h-52 sm:h-full shadow-lg sm:w-52 object-cover rounded-xl bg-gray-100 bg-center bg-cover"
          />
          <div className="flex sm:flex-1 flex-col gap-2 p-1">
            <a
              href={url}
              rel="noreferrer"
              target="_blank"
              className="text-lg sm:text-xl font-semibold  text-gray-600"
            >
              {description === undefined ? "" : title.slice(0, 50)}...
            </a>
            <a
              href={url}
              rel="noreferrer"
              target="_blank"
              className="text-gray-500 text-sm sm:text-base line-clamp-3"
            >
              {description ? description.slice(0, 79) + "..." : ""}
            </a>
            <div className="flex gap-4 mt-auto">
              <span class="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-white bg-blue-400 rounded-full">
                {source ? source.slice(0, 12) : "Unknown"}
              </span>
              {/* time */}
              {/* <span class="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-white bg-blue-400 rounded-full">{new Date(publishedAt).toUTCString()}</span> */}
              <button className="ml-auto flex items-center gap-1 sm:text-sm border border-gray-300 px-3 py-1 rounded-full hover:bg-gray-50 transition-colors focus:bg-gray-100 focus:outline-none focus-visible:border-gray-500">
                <a
                  href={url}
                  rel="noreferrer"
                  target="_blank"
                  className="text-sm"
                >
                  Read More
                </a>
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
