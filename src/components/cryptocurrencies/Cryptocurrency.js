import React  from 'react';
import {Link} from 'react-router-dom';

const Cryptocurrency = (props) => {
  if(!props.cryptocurrency){
    return null;
  }

  return (
    <div className="component">
      <Link to={"/cryptocurrencies/" + props.cryptocurrency.Id}>
      {props.cryptocurrency.SortOrder} {props.cryptocurrency.Name}</Link>
      <p>{props.cryptocurrency.CoinName}</p>
    </div>
  )
}

export default Cryptocurrency;
