import React  from 'react';

const NewsSource = (props) => {
  if(!props.news){
    return null;
  }

  return (
    <div className="news-sources-component">
      <p>{props.news.name} ({props.news.lang})</p>
      <img src={props.news.img} alt=""/>
    </div>
  )
}

export default NewsSource;
