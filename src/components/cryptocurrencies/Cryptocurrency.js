import React  from 'react';
import {Link} from 'react-router-dom';

const Cryptocurrency = (props) => {
  if(!props.cryptocurrency){
    return null;
  }

  return (
    <div className="component">
      <Link to={"/cryptocurrencies/" + props.cryptocurrency.Id}>
      <p>Position: {props.cryptocurrency.SortOrder}</p> <p>Ticker: {props.cryptocurrency.Name}</p>
    </Link>
    <p>Name: {props.cryptocurrency.CoinName}</p>
  </div>
)

}

export default Cryptocurrency;
