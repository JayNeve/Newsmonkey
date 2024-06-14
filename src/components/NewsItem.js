import React from "react";

const NewsItem = (props) => {
    let {title, description, imageUrl, newsUrl, author, date, source} = props;
    return (
      <div>
        <div className="card mx-4" style={{width: "20rem"}}>
        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{zIndex:'1', left:'90%'}}>{source}</span>
          <img src={!imageUrl?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIh7-4CPys-7x6ZNxO5pw7B9zU2ib69oQ4GWAi5cH0Cw&s":imageUrl} className="card-img-top" alt="..." style={{height: "175px"}}/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
          </div>
        </div>
      </div>
    );
}

export default NewsItem;
