import React  from 'react';
import {Link} from 'react-router-dom';

const Cryptocurrency = (props) => {
  if(!props.cryptocurrency){
    return null;
  }

  return (
    <tr>
      <td className="cryptocurrency-container-component">{props.cryptocurrency.SortOrder}</td>
      <td className="cryptocurrency-container-component"><Link to={"/cryptocurrencies/" + props.cryptocurrency.Name}>{props.cryptocurrency.Name}</Link></td>
      <td className="cryptocurrency-container-component">{props.cryptocurrency.CoinName}</td>
    </tr>
  )

}

export default Cryptocurrency;
