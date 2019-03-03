import React  from 'react';
import {Link} from 'react-router-dom';

const Exchange = (props) => {
  if(!props.exchange){
    return null;
  }

  return (
    <div className="component">
        <Link to={"/exchanges/" + props.exchange}>
        {props.exchange}
      </Link>
  </div>
)
}

export default Exchange;
