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
      <p>{props.item.body}</p>
      <p>Language: {props.item.lang}</p>
      <p>Tags: {props.item.tags}</p>
    </div>
  )
}

export default New;
