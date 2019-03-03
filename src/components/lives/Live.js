import React  from 'react';
import {Link} from 'react-router-dom';
import {NumberFormat} from 'react-number-format';

const Live = (props) => {
  if(!props.live){
    return null;
  }

  return (
    <div className="component">

      <div id = "live-cryptocurrency-container">
        <Link to={"/lives/" + props.live[0]}>
        {props.live[0]}
      </Link>
      <span className="left">{props.live[0]}</span>
      <span className="right">
        <NumberFormat value={props.live[1].USD} displayType={'text'} decimalPrecision={2} thousandSeperator={true} prefix={'$'}/>
      </span>
    </div>
  </div>
)
}

export default Live;
