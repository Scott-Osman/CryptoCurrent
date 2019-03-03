import React  from 'react';
import {Link} from 'react-router-dom';
import NumberFormat from 'react-number-format';

const Live = (props) => {
  if(!props.live){
    return null;
  }

  return (
    <div className="live-component">
      <Link to={"/live/" + props.live[0]}>
      <span className="left">{props.live[0]}</span>
    </Link>
    <span className="right">
      <NumberFormat value={props.live[1]} displayType={'text'} decimalprecision={2} thousandSeparator={true} prefix={'$'}/>
    </span>
  </div>
)
}

export default Live;
