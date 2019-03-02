import React  from 'react';
import {Link} from 'react-router-dom';

const Exchange = (props) => {
  if(!props.exchange){
    return null;
  }

  return (
    <div className="component">
      <Link to={"/exchanges/" + props.exchange.Id}>
      {props.exchange.Name}</Link>
      <p>{props.exchange.Url}</p>
    </div>
  )
}

export default Exchange;
