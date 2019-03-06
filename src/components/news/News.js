import React  from 'react';
import {Link} from 'react-router-dom';

const New = (props) => {
  if(!props.item){
    return null;
  }

  return (
    <div className="item-component">
      <Link to={props.item.url}>
        {props.item.title}
      </Link>
      <p><img src={props.item.imageurl} alt=""/></p>
      <p>{props.item.body}</p>
      <p>{props.item.source} {props.item.lang}</p>
      <p>{props.item.tags}</p>
    </div>
  )
}

export default New;
