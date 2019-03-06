import React  from 'react';

const NewsSource = (props) => {
  if(!props.news){
    return null;
  }

  return (
    <div className="item-component">
      <p>{props.news.name}</p>
      <p>Language: {props.news.lang}</p>
      <p>Image: {props.news.image}</p>
    </div>
  )
}

export default NewsSource;
