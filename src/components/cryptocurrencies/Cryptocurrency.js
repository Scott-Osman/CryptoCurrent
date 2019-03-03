import React  from 'react';
import {Link} from 'react-router-dom';

const Cryptocurrency = (props) => {
  if(!props.cryptocurrency){
    return null;
  }

  return (
    <tr className="cryptocurrency-component">
      <Link to={"/cryptocurrencies/" + props.cryptocurrency.Id}>
      <td>{props.cryptocurrency.SortOrder}</td>
      <td>{props.cryptocurrency.Name}</td>
      <td>{props.cryptocurrency.CoinName}</td>
    </Link>
  </tr>
)

}

export default Cryptocurrency;
