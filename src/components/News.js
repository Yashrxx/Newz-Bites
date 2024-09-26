import React, { Component } from 'react'
// import NewsItem from "./NewsItem"
export default class News extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className='container my-3'>
        <div className="card position-relative" style={{ width: "18rem" }}><span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          <span class="visually-hidden">{source}</span>
        </span>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}..
            </h5>
            <p className="card-text">{description}..</p>
            <p className='card-text'><small className='text-muted'>By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}
