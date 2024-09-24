import React, { Component } from 'react'
// import NewsItem from "./NewsItem"
export default class News extends Component {
  render() {
    let {title,description,imageUrl,newsUrl}=this.props;
    return (
      <div className='container my-3'>
        <div className="card" style={{width: "18rem"}}>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}..</h5>
            <p className="card-text">{description}..</p>
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
          </div>
      </div>
    )
  }
}
