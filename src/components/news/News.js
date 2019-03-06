import React  from 'react';
import {Link} from 'react-router-dom';

const New = (props) => {
  if(!props.item){
    return null;
  }

  return (
    <div className="news-component">
      <a href={props.item.url}><h1>{props.item.title}</h1></a>
      <p><img src={props.item.imageurl} alt=""/></p>
      <p>{props.item.body}</p>
      <p><strong>{props.item.source} ({props.item.lang})</strong></p>
      <p>{props.item.tags}</p>
    </div>
  )
}

export default New;
