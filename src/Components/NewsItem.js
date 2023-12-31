import React from 'react'

const  NewsItem = (props)=> {

    let {title, description, urlToImage, url, date, author, source} = props;
    return (
      <div>
       <div className="card">
        <div style={{
          display: "flex", 
          justifyContent: "flex-end",
          position: "absolute",
          right: '0'
      }}>
       <span className= "badge rounded-pill bg-danger">
    {source}

  </span>

        </div>
  <img src={urlToImage} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}..</h5>
    <p className="card-text">{description}..</p>
    <p className="card-text"><small className="text-body-secondary"> By {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>

    <a href={url}  className="btn btn-primary  bg-dark">read more</a>
  </div>
</div>

      </div>
    )
  }


export default NewsItem